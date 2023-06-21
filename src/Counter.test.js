import Enzyme, { shallow } from 'enzyme'
import EnzymeAdaptor from '@wojtekmaj/enzyme-adapter-react-17';
import Counter from './Counter';



Enzyme.configure({ adapter: new EnzymeAdaptor() })

const setup = () => shallow(<Counter />)

const setupFunction = (wrapper, id) => wrapper.find(`[data-test='${id}']`)

test('component render without error', () => {
  const wrapper = setup();
  const appComponent = setupFunction(wrapper, 'appComponent')
  expect(appComponent.length).toBe(1)

})

test("render increment button", () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='button-data']")
  expect(appComponent.length).toBe(1)


})

test("counter display", () => {

})

test("counter display starts at 0", () => {

  const wrapper = setup();
  const count = setupFunction(wrapper, "count").text()
  expect(count).toBe("0")

})


test("clicking button it should increment the display", () => {
  const wrapper = setup();
  const buttonClick = setupFunction(wrapper, "button-data")
  buttonClick.simulate("click");
  const displayCount = setupFunction(wrapper, "count").text();
  expect(displayCount).toBe("1")

})


describe("decrement button", () => {
  test("display value should be greater then 0", () => {
    const wrapper = setup();
    const decrementCount = setupFunction(wrapper, "count").text();
    expect(decrementCount).toBe('0');

  })

  test("render decrement button", () => {
    const wrapper = setup();
    const decremenButton = setupFunction(wrapper, "button-decrement");
    expect(decremenButton.length).toBe(1);

  })

  test("button click and display count should decremant by one", () => {
    const wrapper = setup();
    const decrementCount = setupFunction(wrapper, "button-decrement")
    decrementCount.simulate("click")
    const displayCount = setupFunction(wrapper, "count").text();
    expect(displayCount).toBe("0")

  })




})




