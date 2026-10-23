export const content = document.querySelector("#content");
export function contactLoad() {
  const contact = document.createElement("section");
  contact.classList.add("contact-section");

  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("section-title");
  sectionTitle.textContent = "Contact us";

  const contactLayout = document.createElement("div");
  contactLayout.classList.add("contact-layout");
  const contactList = document.createElement("div");
  contactList.classList.add("contact-list");

  const address = document.createElement("li");
  address.classList.add("contact-item");
  const addressIcon = document.createElement("span");
  addressIcon.classList.add("contact-item");
  addressIcon.textContent = "📍";
  const detailAddress = document.createElement("span");
  detailAddress.textContent = "123 Foodie Lane Flavor Town, FT 12345";
  address.appendChild(addressIcon);
  address.appendChild(detailAddress);

  const tel = document.createElement("li");
  tel.classList.add("contact-item");
  const telIcon = document.createElement("span");
  telIcon.classList.add("contact-item");
  telIcon.textContent = "📞";
  const detailTel = document.createElement("span");
  detailTel.textContent = "(555) 123-4567";
  tel.appendChild(telIcon);
  tel.appendChild(detailTel);

  const mail = document.createElement("li");
  mail.classList.add("contact-item");
  const mailIcon = document.createElement("span");
  mailIcon.classList.add("contact-item");
  mailIcon.textContent = "🕐";
  const detailMail = document.createElement("span");
  detailMail.textContent = "Mon - Sun: 11:00 AM - 9:00 PM";
  mail.appendChild(mailIcon);
  mail.appendChild(detailMail);

  const time = document.createElement("li");
  time.classList.add("contact-item");
  const timeIcon = document.createElement("span");
  timeIcon.classList.add("contact-item");
  timeIcon.textContent = "✉️";
  const detailTime = document.createElement("span");
  detailTime.textContent = "hello@simplebites.com";
  time.appendChild(timeIcon);
  time.appendChild(detailTime);

  const contactImg = document.createElement("div");
  contactImg.classList.add("contact-illustration");

  contactList.appendChild(address);
  contactList.appendChild(tel);
  contactList.appendChild(mail);
  contactList.appendChild(time);

  contactLayout.appendChild(contactList);
  contactLayout.appendChild(contactImg);

  contact.appendChild(sectionTitle);
  contact.appendChild(contactLayout);

  content.appendChild(contact);
}
