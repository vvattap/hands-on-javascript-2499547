import Card from "../components/Card";

const cardListItem = (imgData) => {
  return ` <li class="cardlist_item">
    ${Card(imgData)}
  </li>`;
};
const Cardlist = (data) => {
  return `<section class="cardlist">
    <ul class="cardlist_list">
      ${data.map((imgData) => cardListItem(imgData).join(""))}
    </ul>
  </section>`;
};

export default Cardlist;
