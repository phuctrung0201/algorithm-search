import React, { useEffect, useState } from "react";
import StandardLayout from "../layout/standard-layout";
import { useRouter } from "next/router";
import * as sections from "../data/sections/index";
import * as documents from "../data/documents/index";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const checkInclude = (sectionsF, sectionsS) => {
    for (let sectionF of sectionsF) {
        for (let sectionS of sectionsS) {
            if (sectionF.id == sectionS.id) return true;
        }
    }
    return false;
};

const Search = () => {
    const router = useRouter();
    const [documentsMatch, setDocumentsMatch] = useState([]);
    const q = router.query["q"]?.trim().toLowerCase();
    const filterDocument = router.query['document'] == '1'
    const filterSection = router.query['section'] == '1'
    const filterContent = router.query['content'] == '1'

    const handleSaveKeySeach = () => {
        const keyListStr = localStorage.getItem('key-list')
        if (keyListStr) {
            let keyList = JSON.parse(keyListStr);
            if (keyList[0] != q) {
                keyList.unshift(q)
                if (keyList.length > 10) {
                    keyList = keyList.slice(0, 10)
                }
                localStorage.setItem('key-list', JSON.stringify(keyList))
            }
        } else {
            const keyList = [q]
            localStorage.setItem('key-list', JSON.stringify(keyList))
        }
    }
    useEffect(() => {

        const matchedSections = [];
        for (let field in sections) {
            if (typeof sections[field].content !== "string") continue;
            if (
                filterContent && sections[field].content.toLowerCase().includes(q)
            ) {
                matchedSections.push(sections[field]);
                continue;
            }
            if (
                filterSection && sections[field].title.toLowerCase().includes(q)
            ) {
                matchedSections.push(sections[field]);
            }
        }
        let docs = [];
        for (let field in documents) {
            if (!documents[field].sections) continue;
            if (documents[field].label.toLowerCase().includes(q) && filterDocument) {
                docs.push(documents[field]);
                continue;
            }
            if (
                checkInclude(matchedSections, documents[field].sections)
            )
                docs.push(documents[field]);

        }
        setDocumentsMatch(docs);
        if (docs.length > 0) {
            handleSaveKeySeach()
        }
    }, [q, filterDocument, filterSection, filterContent]);

    return (
        <StandardLayout>
            <div style={{ marginBottom: "100px" }}>
                <div style={{ padding: "10px" }}>
                    <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
                        Search results for {`"${q}"`}
                    </h1>
                </div>
                {documentsMatch.map((n) => (
                    <div key={n.id}>
                        <Box mt={8} p={4} bg="white">
                            <Text
                                style={{ cursor: "pointer" }}
                                fontSize="2xl"
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
            </div>
        </StandardLayout>
    );
};

export default Search;
