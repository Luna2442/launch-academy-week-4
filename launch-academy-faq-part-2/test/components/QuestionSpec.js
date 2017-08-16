import Question from '../../src/components/Question'

describe('Question', () => {
  let wrapper;
  let onClickSpy;

  beforeEach(() => {

    onClickSpy = jasmine.createSpy('on click handler Spy')

    wrapper = mount(
      <Question
        question={'What is your camp like?'}
        answer={"it's great"}
        selected={true}
        handleClick={onClickSpy}
      />
    )
  })

  it('should render a Question component that has the given props', () => {
    expect(wrapper.props()).toEqual({
      question: 'What is your camp like?',
      answer: "it's great",
      selected: true,
      handleClick: onClickSpy
    })
  })

  it('should render a Question component that has an h5 with question text and onClick function', () => {
    expect(wrapper.find('h5')).toBePresent()
    expect(wrapper.find('h5').text()).toEqual('What is your camp like?')
    wrapper.find('h5').simulate('click')
    expect(onClickSpy).toHaveBeenCalled();
  })

  it('should render a Question component that has a p tag with answer text', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).toEqual("it's great")
  })

  it('should render a Question component that has an i tag with answer text that has a click function', () => {
    expect(wrapper.find('i')).toBePresent()
    wrapper.find('i').simulate('click')
    expect(onClickSpy).toHaveBeenCalled();
  })


  it('should render a Question component that has a div tag with correct class name', () => {
    expect(wrapper.find('div').at(1)).toBePresent()
    expect(wrapper.find('div').at(1)).toHaveProp('className', 'selected-question')
    wrapper.setProps({ selected: false });
    expect(wrapper.find('div').at(1)).toHaveProp('className', 'unselected-question')
  })


})

describe('Question', () => {
  let wrapper;
  let onClickSpy;

  beforeEach(() => {

    onClickSpy = jasmine.createSpy('on click handler Spy')

    wrapper = mount(
      <Question
        question={'What is your camp like?'}
        answer={"it's great"}
        selected={false}
        handleClick={onClickSpy}
      />
    )
  })

  it('should not render the answer', () => {
    expect(wrapper.find('p').text()).toEqual("")
  })

})
