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
import { ArrowUpIcon, SearchIcon } from "@chakra-ui/icons";
import { connect } from "react-redux";
import Navigate from "../components/navigate";
import NextLink from "next/link";
import { useCallback, useMemo, useRef } from "react";
import { useRouter } from "next/dist/client/router";

const mapState2NavigateProps = (state) => ({
  items: state.document.data
    .filter((d) => d.subs)
    .map((d) => {
      const subs = d.subs.map((ds) => ({
        ...ds,
        eventData: {
          docId: ds.id,
        },
      }));

      return { ...d, subs };
    }),
});

const ConnectedNavigate = connect(mapState2NavigateProps)(Navigate);

export default function StandardLayout(props) {
  const router = useRouter();
  const contentRef = useRef();

  const relatedDocumentAvailable = useMemo(() => {
    const availableRoutes = ["/documents/[id]"];

    return availableRoutes.includes(router.pathname);
  }, [router.pathname]);

  const handleNavigate = useCallback((event) => {
    switch (event.name) {
      case "redirect":
        router.push(`/documents/${event.data.docId}`);
        return;
      default:
        return;
    }
  }, []);

  const handleScrollToTop = () => {
    contentRef.current.scrollTop = 0;
  };

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
        <GridItem colSpan={1} borderRightWidth={1} position="relative">
          <Box py={2}>
            <Container maxW="container.xl">
              <ConnectedNavigate handleEvent={handleNavigate} />
            </Container>
          </Box>
          <IconButton
            icon={<ArrowUpIcon />}
            colorScheme="teal"
            variant="solid"
            position="absolute"
            right={-50}
            bottom={10}
            zIndex={1}
            onClick={handleScrollToTop}
            opacity={0.5}
          ></IconButton>
        </GridItem>
        <GridItem
          bg="gray.50"
          colSpan={relatedDocumentAvailable ? 4 : 5}
          overflow="auto"
          ref={contentRef}
        >
          <Container maxW="container.xl">{props.children}</Container>
        </GridItem>
        {!relatedDocumentAvailable ? null : (
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
        )}
      </Grid>
    </Flex>
  );
}
