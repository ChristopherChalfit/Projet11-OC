import Features from "../../components/Features/Features";
import IconChat from '../../assets/images/icon-chat.webp'
import IconMoney from '../../assets/images/icon-money.webp'
import IconSecurity from '../../assets/images/icon-security.webp'
import "./Home.sass";
export default function Home() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Features img={IconChat} alt="Icon-Chat" title="You are our #1 priority" content="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."/>
       <Features img={IconMoney} alt="Icon-Money" title="More savings means higher rates" content="The more you save with us, the higher your interest rate will be!"/>
       <Features img={IconSecurity} alt="Icon-Security" title="Security you can trust" content=" We use top of the line encryption to make sure your data and money
            is always safe.."/>
     
     </section>
    </main>
  );
}
