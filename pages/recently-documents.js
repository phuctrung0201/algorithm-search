import React, { useEffect, useState } from "react";
import StandardLayout from "../layout/standard-layout";
import * as documents from "../data/documents/index";
import { useRouter } from "next/router";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const Recently = () => {
    const [docList, setDocList] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const documentList = Object.values(documents);
        let documentIds = localStorage.getItem("recently-docs") ?? '[]';
        documentIds = JSON.parse(documentIds);
        let docs = [];
        for (let docId of documentIds) {
            const doc = documentList.find((item) => item.id == docId);
            if (doc) docs.push(doc);
        }
        setDocList(docs);
    }, []);
    return (
        <StandardLayout>
            {docList.map((n) => (
                <div style={{ maxHeight: "245px", overflow: "hidden" }} key={n.id}>
                    <Box mt={8} p={4} bg="white">
                        <Text
                            fontSize="2xl"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                router.push(`/documents/${n.id}`);
                            }}
                        >
                            {n.label}
                        </Text>
                        <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
                            <GridItem colSpan={3}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: n.sections[0].content }}
                                ></div>
                            </GridItem>
                        </Grid>
                    </Box>
                </div>
            ))}
        </StandardLayout>
    );
};

export default Recently;