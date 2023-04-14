import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Marquee from "react-fast-marquee"

import "./SponsorIndex.css"

const SponsorIndex = () => {
  const data = useStaticQuery(
    graphql`
      query test {
        allContentfulAsset(
          filter: {
            metadata: { tags: { elemMatch: { name: { eq: "sponsorIndex" } } } }
          }
        ) {
          edges {
            node {
              gatsbyImageData(width: 300, resizingBehavior: SCALE)
              title
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <div>
        <h1 className="text-gisau font-lazyDog text-4xl text-center sm:text-left">
          Partnership
        </h1>
      </div>
      <div>
        <Marquee speed={50}>
          <div className="flex items-center justify-around flex-wrap">
            {data.allContentfulAsset.edges.map(edge => {
              return (
                <div className="py-4 px-12">
                  <GatsbyImage
                    image={edge.node.gatsbyImageData}
                    key={edge.node.title}
                    alt={edge.node.title}
                  />
                </div>
              )
            })}
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default SponsorIndex
