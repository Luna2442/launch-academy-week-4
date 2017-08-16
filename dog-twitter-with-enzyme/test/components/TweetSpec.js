import Tweet from '../../src/components/Tweet';

describe('Tweet', () => {

  // YOUR TEST CODE HERE
  let text,
      name,
      userPhoto,
      className,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Tweet
        text= "This doesn't look like Kansas"
        name= "Todo"
        userPhoto= "http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg"
        className= "selected"
      />
    );
  });

  it('should render a div tag', () => {
    expect(wrapper.find('div')).toBePresent();
  });

  it('should render a div tag', () => {
    expect(wrapper.find('div')).toHaveProp("className", "tweet-box selected");
  });

  it('should render a div tag', () => {
    expect(wrapper.find('div')).toHaveProp("onClick");
  });

  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });

  it('should render a span tag', () => {
    expect(wrapper.find('span')).toBePresent();
  });

  it('should render a p tag', () => {
    expect(wrapper.find('p')).toBePresent();
  });

  it('should have a span tag with the correct text', () => {
    expect(wrapper.find('span').text()).toBe("Todo");
  });

  it('should have an img tag with the correct image', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: "http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg"
    });
  });

  it('should have a p tag with the correct text', () => {
    expect(wrapper.find('p').text()).toBe("This doesn't look like Kansas");
  });

});
