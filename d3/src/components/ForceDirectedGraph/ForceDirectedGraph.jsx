
import { useEffect, useRef } from "react";
import { runForceGraph } from "./forceGraphGenerator";
import { graph } from "./data";
import styles from "./forceGraph.module.css";

export function ForceDirectedGraph({ linksData, nodesData, nodeHoverTooltip }) {
    const containerRef = useRef(null);

    useEffect(() => {

        if (containerRef.current) {
            const {destroy, restart} = runForceGraph(containerRef.current, graph.links, graph.nodes);
        }
    }, []);

    return <div ref={containerRef} className={styles.container} />;
}