import React from 'react';
import Question from '../components/Question';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      questions: [],
      selectedQuestion: null
    }

    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this)
  }

  getData(){
    fetch('http://localhost:3000/api/v1/questions')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} ${response.statusText}`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(data => {
      this.setState({questions: data})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    let questions = this.state.questions.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We're Here To Help</h1>
        <div className='question-list'>
          {questions}
        </div>
      </div>
    )
  }
}

export default App;
