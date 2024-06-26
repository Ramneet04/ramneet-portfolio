import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Form from "../../../components/contact/Form"
export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image"  className=" -z-50 fixed top-0 left-0 w-full h-screen object-cover object-center opacity-60"/>

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
        <h1 className=" text-yellow-400 font-semibold text-center text-5xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
        </div>
        <Form/>
      </article>
    </>
  );
}
