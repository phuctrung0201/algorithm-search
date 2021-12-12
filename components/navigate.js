import { Box } from "@chakra-ui/layout";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import { useMemo, useState } from "react";
import { Button } from "@chakra-ui/button";

const NavigateEvent = {
  TOGGLE_COLLAPSE: "toggle-collapse",
  REDIRECT: "redirect",
};

function NavigateItem(props) {
  const nonsubs = useMemo(() => !props.subs.length, [props.subs.length]);
  const data = useMemo(() => props.eventData, [props.eventData]);
  const event = useMemo(
    () => (nonsubs ? NavigateEvent.REDIRECT : NavigateEvent.TOGGLE_COLLAPSE),
    [nonsubs]
  );

  const [collapse, setCollapse] = useState(false);

  const clickHandle = () => {
    switch (event) {
      case NavigateEvent.TOGGLE_COLLAPSE:
        setCollapse(!collapse);
        break;
      default:
        break;
    }
    props.handleEvent({
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
        justifyContent="left"
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
            handleEvent={props.handleEvent}
          />
        ))}
    </Box>
  );
}

NavigateItem.defaultProps = {
  label: "label",
  eventData: "event data",
  handleEvent: (event) => {},
  subs: [],
};

function Navigate(props) {
  return (
    <Box>
      {props.items.map((item) => (
        <NavigateItem {...item} key={item.id} handleEvent={props.handleEvent} />
      ))}
    </Box>
  );
}

Navigate.defaultProps = {
  item: [],
  handleEvent: (event) => {},
};

export default Navigate;
