import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Contact</h1>
      <p>
        <AiOutlineMail style={{ verticalAlign: "middle" }}/> 
        <a href="oukhaj@gmail.com"> oukhaj@gmail.com</a>
      </p>
      <p>
        <AiFillLinkedin style={{ verticalAlign: "middle" }}/> 
        <a href="https://www.linkedin.com/in/hajer-oukhay-29829a183/" target="_blank"> Hajer OUKHAY</a>
      </p>
    </div>
  );
}
