import { Box, Container, Grid, GridItem } from "@chakra-ui/layout";
import {
  Flex,
  Input,
  Center,
  Text,
  IconButton,
  Checkbox,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { connect } from "react-redux";
import Navigate from "../components/navigate";
import NextLink from "next/link";

const mapState2NavigateProps = (state) => ({
  items: state.document.data.filter((d) => d.subs),
});

const ConnectedNavigate = connect(mapState2NavigateProps)(Navigate);

export default function StandardLayout(props) {
  return (
    <Flex direction="column" h="100vh">
      <Box py={2} borderBottomWidth={1}>
        <Container maxW="contrainer.xl">
          <Flex>
            <Center px={2}>
              <Text borderRadius={4} color="red.600">
                GADS
              </Text>
            </Center>
            <Center px={2} borderLeftWidth={1}>
              <Link as={NextLink} href="/">
                Home
              </Link>
            </Center>
            <Center px={2}>
              <Link as={NextLink} href="/">
                Recently documents
              </Link>
            </Center>
            <Spacer></Spacer>
            <Center px={2} width={500}>
              <Input placeholder="Search" />
            </Center>
            <Center pl={2}>
              <IconButton aria-label="Search database" icon={<SearchIcon />} />
            </Center>
          </Flex>
        </Container>
      </Box>
      <Grid templateColumns="repeat(6, 1fr)" overflow="hidden" flex={1}>
        <GridItem colSpan={1} borderRightWidth={1}>
          <Box py={2}>
            <Container maxW="container.xl">
              <ConnectedNavigate />
            </Container>
          </Box>
        </GridItem>
        <GridItem bg="gray.50" colSpan={4} overflow="auto">
          <Container maxW="container.xl">{props.children}</Container>
        </GridItem>
        <GridItem colSpan={1} borderLeftWidth={1}>
          <Box py={2}>
            <Container maxW="container.xl">
              <Box borderBottomWidth={1} pb={2}>
                <Text>Related documents:</Text>
                <Box>
                  <Checkbox defaultIsChecked>Topic</Checkbox>
                </Box>
                <Box>
                  <Checkbox defaultIsChecked>Complexity Time</Checkbox>
                </Box>
                <Box>
                  <Checkbox defaultIsChecked>Complexity Space</Checkbox>
                </Box>
              </Box>
            </Container>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
}
