import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { connect } from "react-redux";
import StandardLayout from "../../layout/standard-layout";

function DocumentDetail(props) {

  useEffect(() => {
    //handle recently docs
    const docs = localStorage.getItem('recently-docs')
    if (!docs) {
      const initDocs = [props.docId]
      localStorage.setItem('recently-docs', JSON.stringify(initDocs))
      return
    }
    let documents = JSON.parse(docs)
    if (documents[0] !== props.docId) {
      documents = documents.filter(i => i !== props.docId && i)
      documents.unshift(props.docId)
      documents = documents.slice(0, 10)
      localStorage.setItem('recently-docs', JSON.stringify(documents))
    }
  }, [props])

  if (!props.document) return null;

  return (
    <Box pt={4} pb={20}>
      <Text fontSize="2xl">{props.document.label}</Text>
      <Box p={4} mt={4} bg="white">
        <Text fontSize="xl">Overviwe</Text>
        <Box mt={4}>
          {props.document.sections.map((s) => (
            <Text key={`o-${s.id}`}>
              <a href={`#${s.id}`} key={`o-${s.id}`}># {s.title}</a>
            </Text>
          ))}
        </Box>
      </Box>
      {props.document.sections.map((s) => (
        <Box id={s.id} key={s.id} p={4} mt={8} bg="white">
          <Box w='100%' p={0} color='black'>
            <Text fontSize="xl">{s.title}</Text>
          </Box>
          <Box mt={4}>
            <div dangerouslySetInnerHTML={{ __html: s.content }}></div>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

const mapState2DocumentDetailProps = (state, ownProps) => {
  const docIndex = state.document.data.findIndex((d) => d.id == ownProps.docId);
  return {
    document: docIndex < 0 ? null : state.document.data[docIndex],
    index: docIndex,
  };
};

const ConnectedDocumentDetail = connect(mapState2DocumentDetailProps)(
  DocumentDetail
);

export default function DocumentById() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <StandardLayout>
      <ConnectedDocumentDetail docId={id}></ConnectedDocumentDetail>
    </StandardLayout>
  );
}