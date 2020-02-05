import dateFormat from 'dateformat'
import { History } from 'history'
import update from 'immutability-helper'
import * as React from 'react'
import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Loader
} from 'semantic-ui-react'

import { createTopic, deleteTopic, getTopics, patchTopic } from '../api/topics-api'
import Auth from '../auth/Auth'
import { Topic } from '../types/Topic'

interface TopicsProps {
  auth: Auth
  history: History
}

interface TopicsState {
  topics: Topic[]
  newTopicDescription: string
  loadingTopics: boolean
}

export class Topics extends React.PureComponent<TopicsProps, TopicsState> {
  state: TopicsState = {
    topics: [],
    newTopicDescription: '',
    loadingTopics: true
  }

  handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTopicDescription: event.target.value })
  }

  onEditButtonClick = (topicId: string) => {
    this.props.history.push(`/topics/${topicId}/edit`)
  }

  onTopicCreate = async (event: React.ChangeEvent<HTMLButtonElement>) => {
    try {
      // const dueDate = this.calculateDueDate()
      const newTopic = await createTopic(this.props.auth.getIdToken(), {
        description: this.state.newTopicDescription,
        // dueDate
      })
      this.setState({
        topics: [...this.state.topics, newTopic],
        newTopicDescription: ''
      })
    } catch {
      alert('Topic creation failed')
    }
  }

  onTopicDelete = async (topicId: string) => {
    try {
      await deleteTopic(this.props.auth.getIdToken(), topicId)
      this.setState({
        topics: this.state.topics.filter(topic => topic.topicId != topicId)
      })
    } catch {
      alert('Topic deletion failed')
    }
  }

  onTopicCheck = async (pos: number) => {
    try {
      const topic = this.state.topics[pos]
      await patchTopic(this.props.auth.getIdToken(), topic.topicId, {
        description: topic.description,
        dueDate: topic.dueDate,
        done: !topic.done
      })
      this.setState({
        topics: update(this.state.topics, {
          [pos]: { done: { $set: !topic.done } }
        })
      })
    } catch {
      alert('Topic deletion failed')
    }
  }

  async componentDidMount() {
    try {
      const topics = await getTopics(this.props.auth.getIdToken())
      this.setState({
        topics,
        loadingTopics: false
      })
    } catch (e) {
      alert(`Failed to fetch topics: ${e.message}`)
    }
  }

  render() {
    return (
      <div>
        <Header as="h1">Topics</Header>

        {this.renderCreateTopicInput()}

        {this.renderTopics()}
      </div>
    )
  }

  renderCreateTopicInput() {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Input
            action={{
              color: 'teal',
              labelPosition: 'left',
              icon: 'add',
              content: 'New task',
              onClick: this.onTopicCreate
            }}
            fluid
            actionPosition="left"
            placeholder="To style your world..."
            onChange={this.handleDescriptionChange}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Divider />
        </Grid.Column>
      </Grid.Row>
    )
  }

  renderTopics() {
    if (this.state.loadingTopics) {
      return this.renderLoading()
    }

    return this.renderTopicsList()
  }

  renderLoading() {
    return (
      <Grid.Row>
        <Loader indeterminate active inline="centered">
          Loading Topics
        </Loader>
      </Grid.Row>
    )
  }

  renderTopicsList() {
    return (
      <Grid padded>
        {this.state.topics.map((topic, pos) => {
          return (
            <Grid.Row key={topic.topicId}>
              <Grid.Column width={1} verticalAlign="middle">
                <Checkbox
                  onChange={() => this.onTopicCheck(pos)}
                  checked={topic.done}
                />
              </Grid.Column>
              <Grid.Column width={10} verticalAlign="middle">
                {topic.description}
              </Grid.Column>
              <Grid.Column width={3} floated="right">
                {topic.dueDate}
              </Grid.Column>
              <Grid.Column width={1} floated="right">
                <Button
                  icon
                  color="blue"
                  onClick={() => this.onEditButtonClick(topic.topicId)}
                >
                  <Icon name="pencil" />
                </Button>
              </Grid.Column>
              <Grid.Column width={1} floated="right">
                <Button
                  icon
                  color="red"
                  onClick={() => this.onTopicDelete(topic.topicId)}
                >
                  <Icon name="delete" />
                </Button>
              </Grid.Column>
              {topic.attachmentUrl && (
                <Image src={topic.attachmentUrl} size="small" wrapped />
              )}
              <Grid.Column width={16}>
                <Divider />
              </Grid.Column>
            </Grid.Row>
          )
        })}
      </Grid>
    )
  }

  calculateDueDate(): string {
    const date = new Date()
    date.setDate(date.getDate() + 7)

    return dateFormat(date, 'yyyy-mm-dd') as string
  }
}
