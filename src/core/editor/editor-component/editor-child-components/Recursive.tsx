import { EditorElement } from "@/providers/editor/editor-provider";
import TextComponent from "./Text";
import Container from "./Container";

type props = {
  element: EditorElement;
};

const Recursive = ({ element }: props) => {
  console.log(element?.type);
  switch (element.type) {
    case "text":
      return <TextComponent element={element} />;
    case "container":
      return <Container element={element} />;
    // case "video":
    //   return <VideoComponent element={element} />;
    // case "contactForm":
    //   return <ContactFormComponent element={element} />;
    // case "paymentForm":
    //   return <Checkout element={element} />;
    // case "2Col":
    //   return <Container element={element} />;
    case "__body":
      return <Container element={element} />;

    // case "link":
    //   return <LinkComponent element={element} />;
    default:
      return null;
  }
};

export default Recursive;
