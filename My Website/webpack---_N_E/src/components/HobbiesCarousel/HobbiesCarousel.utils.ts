import type {
  GenerateControlList,
  UpdateControlList,
  Control,
} from "./HobbiesCarousel.types";

export const generateControlList: GenerateControlList = (hobbies) => {
  const controls = hobbies.map(({ title, id }) => ({ title, id, key: id }));
  const firstPaditems: Control[] = [];
  const secondPaditems: Control[] = [];
  const thirdPaditems: Control[] = [];

  controls.forEach(({ key, ...props }) => {
    firstPaditems.push({
      ...props,
      key: key + controls.length,
    });
    secondPaditems.push({
      ...props,
      key: key + controls.length * 2,
    });
    thirdPaditems.push({
      ...props,
      key: key + controls.length * 3,
    });
  });

  return [...controls, ...firstPaditems, ...secondPaditems, ...thirdPaditems];
};

export const updateControlList: UpdateControlList = (
  controlList,
  selectedKey
) => {
  const selectedItemIndex = controlList.findIndex(
    ({ key }) => key === selectedKey
  );
  const otherItems = controlList.slice(selectedItemIndex);
  const padItems = controlList
    .slice(0, selectedItemIndex)
    .map((item, index) => ({
      ...item,
      key: otherItems[otherItems.length - 1].key + index + 1,
    }));

  return [...otherItems, ...padItems];
};
