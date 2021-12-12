import StandardLayout from "../layout/standard-layout";
import { AspectRatio, Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { connect } from "react-redux";

function NewsList(props) {
  return (
    <>
      {props.news.map((n) => (
        <Box key={n.id} mt={8} p={4} bg="white">
          <Text fontSize="2xl">{n.title}</Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
            <GridItem colSpan={1}>
              <AspectRatio ratio={4 / 3}>
                {n.thumbnail.type != "video" ? null : (
                  <iframe
                    src={n.thumbnail.url}
                    title={n.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                )}
              </AspectRatio>
            </GridItem>
            <GridItem colSpan={3}>
              <Text>{n.description}</Text>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </>
  );
}

const mapState2NewsListProps = (state) => ({
  news: state.new.data,
});

const ConnectedNewsList = connect(mapState2NewsListProps)(NewsList);

export default function Home() {
  return (
    <StandardLayout>
      <Box pb={20}>
        <Text fontSize="xl" mt={8}>
          News
        </Text>
        <ConnectedNewsList />
      </Box>
    </StandardLayout>
  );
}
