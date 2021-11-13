import { Box } from "@chakra-ui/layout";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import { Button } from "@chakra-ui/button";

const NavigateEvent = {
  TOGGLE_COLLAPSE: "toggle-collapse",
  REDIRECT: "redirect",
};

function NavigateItem(props) {
  const nonsubs = !props.subs.length;
  const data = props.eventData;
  const event = nonsubs
    ? NavigateEvent.REDIRECT
    : NavigateEvent.TOGGLE_COLLAPSE;

  const [collapse, setCollapse] = useState(false);

  const clickHandle = () => {
    switch (event) {
      case NavigateEvent.TOGGLE_COLLAPSE:
        setCollapse(!collapse);
        break;
      default:
        break;
    }
    props.eventHandle({
      name: event,
      data,
    });
  };

  return (
    <Box px={2}>
      {nonsubs ? <ChevronRightIcon /> : null}
      {!nonsubs && !collapse && <ChevronDownIcon />}
      {!nonsubs && collapse && <ChevronUpIcon />}
      <Button
        onClick={clickHandle}
        justifyContent="right"
        colorScheme="teal"
        variant="link"
      >
        {props.label}
      </Button>
      {collapse &&
        props.subs.map((item) => (
          <NavigateItem
            {...item}
            key={item.id}
            eventHandle={props.eventHandle}
          />
        ))}
    </Box>
  );
}

NavigateItem.defaultProps = {
  label: "label",
  eventData: "event data",
  eventHandle: (event) => {},
  subs: [],
};

function Navigate(props) {
  return (
    <Box>
      {props.items.map((item) => (
        <NavigateItem {...item} key={item.id} eventHandle={props.eventHandle} />
      ))}
    </Box>
  );
}

Navigate.defaultProps = {
  item: [],
  eventHandle: (event) => {},
};

export default Navigate;
