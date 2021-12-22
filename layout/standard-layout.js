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
import { useCallback, useMemo, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";

const mapState2NavigateProps = (state) => ({
  items: state.document.data
    .filter((d) => d?.subs)
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

const mapState2RelatedNavigateProps = (state, ownProps) => {
  const doc = state.document?.data.find((d) => d?.id == ownProps.docId);

  if (!ownProps.docId || !doc)
    return {
      items: [],
    };

  const resultById = {};

  if (ownProps.isSameTopic) {
    state.document.data
      .find((d) => d.subs && d.subs.find((doc) => doc.id == ownProps.docId))
      .subs.filter((ds) => ds.id != ownProps.docId)
      .forEach((ds) => {
        if (!resultById[ds.id]) resultById[ds.id] = ds;
      });
  }

  if (ownProps.isSameComplexityTime) {
    state.document.data
      .filter(
        (ds) =>
          ds.id != ownProps.docId && ds.complexity_time == doc.complexity_time
      )
      .forEach((ds) => {
        if (!resultById[ds.id]) resultById[ds.id] = ds;
      });
  }

  if (ownProps.isSameComplexitySpace) {
    state.document.data
      .filter(
        (ds) =>
          ds.id != ownProps.docId && ds.complexity_space == doc.complexity_space
      )
      .forEach((ds) => {
        if (!resultById[ds.id]) resultById[ds.id] = ds;
      });
  }

  return {
    items: Object.values(resultById).map((ds) => ({
      ...ds,
      eventData: {
        docId: ds.id,
      },
    })),
  };
};

const ConnectedRelatedNavigate = connect(mapState2RelatedNavigateProps)(
  Navigate
);

export default function StandardLayout(props) {
  const router = useRouter();
  const contentRef = useRef();
  const [isSameTopic, setIsSameTopic] = useState(true);
  const [isShowSearchModal, setShowSearchModal] = useState(false);
  const [isSameComplexityTime, setIsSameComplexityTime] = useState(true);
  const [isSameComplexitySpace, setIsSameComplexitySpace] = useState(true);
  const [keySearch, setKeySearch] = useState(router.query["q"] || "");

  const relatedDocumentAvailable = useMemo(() => {
    const availableRoutes = ["/documents/[id]"];

    return availableRoutes.includes(router.pathname);
  }, [router.pathname]);

  const docId = useMemo(() => {
    if (!relatedDocumentAvailable) return null;
    return router.query.id;
  }, [relatedDocumentAvailable, router.query.id]);

  const handleChangeRelatedDocumentsFilter = useCallback(
    (filter) => (e) => {
      switch (filter) {
        case "topic":
          setIsSameTopic((isSameTopic) => !isSameTopic);
          break;
        case "complexity_time":
          setIsSameComplexityTime(
            (isSameComplexityTime) => !isSameComplexityTime
          );
          break;
        case "complexity_space":
          setIsSameComplexitySpace(
            (isSameComplexitySpace) => !isSameComplexitySpace
          );
          break;
        default:
          console.log(e.target.value);
      }
    },
    []
  );

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

  const handleChange = (event) => {
    setKeySearch(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      document.getElementById('search-input').blur()
      pushToSearchPage();
    }
  };

  const handleFocus = () => {
    setShowSearchModal(true)
  }

  const handleBlur = () => {
    setShowSearchModal(false)
  }

  const handleClickSearchKey = (key) => {
    const params = `q=${key}&document=${router.query['document'] ?? '1'}&section=${router.query['section'] ?? '1'}&content=${router.query['content'] ?? '1'}`
    router.push(`/search?${params}`)
  }

  const pushToSearchPage = () => {
    if (keySearch) {
      router.push(`/search?q=${keySearch}&document=1&section=1&content=1`);
    }
  };

  const handleChangeFilter = (type) => {
    const currentVal = router.query[type] == '1' ? '1' : '0'
    const nextVal = router.query[type] == '1' ? '0' : '1'
    const currentUrl = router.asPath
    const nextUrl = currentUrl.replace(`${type}=${currentVal}`, `${type}=${nextVal}`)
    router.push(nextUrl)
  }

  const getSearchResults = () => {
    const results = localStorage.getItem('key-list')
    if (results) {
      return JSON.parse(results)
    }
    return []
  }

  return (
    <div>
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
                <Link as={NextLink} href="/recently-documents">
                  Recently documents
              </Link>
              </Center>
              <Spacer></Spacer>
              {
                router && router.route.includes('search') && <Center px={2} width={500}>
                  <Checkbox onChange={() => handleChangeFilter('document')} size="md" colorScheme="green" isChecked={router.query['document'] == '1'} m={2}>
                    Document
              </Checkbox>
                  <Checkbox onChange={() => handleChangeFilter('section')} size="md" colorScheme="green" isChecked={router.query['section'] == '1'} m={2}>
                    Section
              </Checkbox>
                  <Checkbox onChange={() => handleChangeFilter('content')} size="md" colorScheme="green" isChecked={router.query['content'] == '1'} m={2}>
                    Content
              </Checkbox>
                </Center>
              }
              <Center px={2} width={500}>
                <Input
                  onChange={handleChange}
                  onKeyUp={handleKeyUp}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  id="search-input"
                  value={keySearch}
                  placeholder="Search"
                />
              </Center>
              <Center pl={2}>
                <IconButton
                  onClick={() => {
                    pushToSearchPage();
                  }}
                  aria-label="Search database"
                  icon={<SearchIcon />}
                />
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
                      <Checkbox
                        isChecked={isSameTopic}
                        onChange={handleChangeRelatedDocumentsFilter("topic")}
                      >
                        Topic
                    </Checkbox>
                    </Box>
                    <Box>
                      <Checkbox
                        isChecked={isSameComplexityTime}
                        onChange={handleChangeRelatedDocumentsFilter(
                          "complexity_time"
                        )}
                      >
                        Complexity Time
                    </Checkbox>
                    </Box>
                    <Box>
                      <Checkbox
                        isChecked={isSameComplexitySpace}
                        onChange={handleChangeRelatedDocumentsFilter(
                          "complexity_space"
                        )}
                      >
                        Complexity Space
                    </Checkbox>
                    </Box>
                  </Box>
                  <ConnectedRelatedNavigate
                    docId={docId}
                    isSameTopic={isSameTopic}
                    isSameComplexityTime={isSameComplexityTime}
                    isSameComplexitySpace={isSameComplexitySpace}
                  />
                </Container>
              </Box>
            </GridItem>
          )}
        </Grid>
      </Flex>
      { isShowSearchModal && getSearchResults().length > 0 && <div style={{
        width: "484px",
        height: "auto",
        backgroundColor: "#dff9fb",
        position: "fixed",
        top: "57px",
        right: "72px",
        padding: "20px"
      }}>
        <ul style={{
          listStyle: "none"
        }}>
          <li style={{ fontWeight: "bold" }}>Recently search keys</li>
          {
            getSearchResults().map((k, i) => {
              return <li key={i} style={{
                height: "40px",
                borderBottom: "1px solid #fff",
                padding: "10px",
                cursor: "pointer"
              }}
                onMouseDown={() => { handleClickSearchKey(k) }}
              >{k}</li>
            })
          }
        </ul>
      </div>}
    </div>
  );
}
