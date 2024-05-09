import Image from "next/image";
import sent from "/send.svg"

export default function Home() {
  return (
    <main className="container">
      <div className="landing">
        <h1>
          Your journey
        </h1>
        <h1>
          Your Car
        </h1>
        <h1>
          Ytour Way
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod aliquam. Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes varius amet vestibulum tellus facilisis consequat pretium. Et faucibus laoreet molestie diam semper fames diam eget.
        </p>
        <button type="button"><img src="/send.svg" alt="subscribe" /> Subscribe</button>
      </div>
      

    </main>

  );
}
