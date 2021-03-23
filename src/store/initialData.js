import faker from "faker";

export const arr = [];
for (let i = 1; i <= 5; i++) {
  arr.push({
    id: i,
    name: faker.name.firstName(),
    url: `http://placekitten.com/500/300?image=${
      Math.floor(Math.random() * 16) + 1
    }`,
  });
}
