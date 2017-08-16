import App from '../../src/containers/App'
import Question from '../../src/components/Question'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    let response = new window.Response(
      JSON.stringify([
        {
          id: 1,
          question: "What is Launch Academy?",
          answer: "answer"
        }
      ]), {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json'}
      }
    )

    spyOn(global, 'fetch').and.returnValue(Promise.resolve(response))

    wrapper = mount(
      <App />
    )
  });

  it('should have a specified initial state', () => {
    expect(wrapper.state()).toEqual({
      questions: [],
      selectedQuestion: null
    })
  })

  it('should have a specified state after fetch', done => {
    setTimeout(() => {
      expect(wrapper.state()).toEqual({
        questions: [{
          id: 1,
          question: "What is Launch Academy?",
          answer: "answer"
        }],
        selectedQuestion: null
      })
      done();
    }, 0)
  })

  it('should render a Question component', done => {
    setTimeout(() => {
      expect(wrapper.find(Question)).toBePresent();
    }, 0)
    done();
  })

  it('should render a Question component with props from state', done => {
    setTimeout(() => {
      wrapper.setState({ selectedQuestion: 1 })
      expect(wrapper.find(Question).props()).toEqual({
        question: "What is Launch Academy?",
        answer: "answer",
        selected: true,
        handleClick: jasmine.any(Function)
      })
      done();
    }, 0)
  })

  it('should have a h1 tag with proper text', done => {
    setTimeout(() => {
      expect(wrapper.find('h1').text()).toEqual('We\'re Here To Help')
      done();
    }, 0)
  })

  it('should have a div tag with specific class', done => {
    setTimeout(() => {
      expect(wrapper.find('div').at(1)).toHaveClassName('question-list')
      done();
    }, 0)
  })



})
