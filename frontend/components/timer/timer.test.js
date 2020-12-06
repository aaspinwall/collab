import { shallow } from "enzyme";
import Timer from "./index";

describe("Timer", () => {
  it("should set a default time", () => {
    const wrapper = shallow(<Timer />);

    expect(wrapper.find(".timer-seconds").text()).toBe("200s");
  });

  it("should set a defined time", () => {
    const wrapper = shallow(<Timer time='4444' />);

    expect(wrapper.find(".timer-seconds").text()).toBe("4444s");
  });
});
