import React from "react";
import { ScrollSync, ScrollSyncNode } from "scroll-sync-react";
const smallSize = 80;
const largeSize = 200;
export const VerticalExample = () => (
  <ScrollSync>
    <div
      style={{
        display: "flex",
        position: "relative",
        height: 600,
        width: "100%"
      }}
    >
      <ScrollSyncNode group="a" scroll="two-way">
        <div style={{ overflow: "auto", height: smallSize * 4 }}>
          <section
            style={{ height: smallSize * 100, width: smallSize, lineHeight: 0 }}
          >
            {Array.from(Array(100), (e, i) => {
              return (
                <img
                  key={`small${i + 1}`}
                  src={`https://picsum.photos/200/300?sig=${i + 1}`}
                  alt={`small${i + 1}`}
                  style={{ height: smallSize, width: smallSize }}
                />
              );
            })}
          </section>
        </div>
      </ScrollSyncNode>

      <ScrollSyncNode group="a">
        <div style={{ overflow: "auto", height: largeSize * 4 }}>
          <section
            style={{
              height: largeSize * 100,
              width: largeSize,
              lineHeight: 0
            }}
          >
            {Array.from(Array(100), (e, i) => {
              return (
                <img
                  key={`large${i + 1}`}
                  src={`https://picsum.photos/200/300?sig=${i + 1}`}
                  alt={`large${i + 1}`}
                  style={{ height: largeSize, width: largeSize }}
                />
              );
            })}
          </section>
        </div>
      </ScrollSyncNode>
    </div>
  </ScrollSync>
);

export default VerticalExample;
