import React from "react";
import { getAllArticles } from "../../utils/markdown";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks";
import Parallax from "../Parallax/Parallax";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import { Theme, makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/jss/nextjs-material-kit/pages/components";
import Footer from "../Footer/Footer";
import classNames from "classnames";
import BlogCard from "./BlogCard";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

// Importing the custom styles for buttons
import buttonStyle2 from "../../styles/jss/nextjs-material-kit/components/buttonStyle2";

// Define the custom styles interface
interface CustomStyles extends ClassNameMap<"styles"> {
  container: string; // Define the properties you expect here
  // Add other properties if needed
}

// Define the component function
export default function BlogPage(props: { posts: PostType[] }) {
  const classes = useStyles();

  const { posts } = props;

  return (
    <>
    <div>
      {/* Header Component */}
      <Header
        brand="VintageEmu.lol"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      {/* Parallax Component */}
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          {/* GridContainer Component */}
          <GridContainer children={undefined}>
            {/* Nested Parallax Component */}
            <Parallax>
              {/* GridItem Component */}
              <GridItem children={undefined}>
                <div className={classes.brand}>
                  <h1 className={classes.title}>NextJS Blog.</h1>
                  <p>Explore the latest articles</p>
                  {/* Buttons for Call to Action */}
                  <div className={classes.buttonContainer}>
                    {/* View in Store Button */}
                    <button className={classes.viewInStoreButton}>
                      View in Store
                    </button>
                    {/* Buy Now Button */}
                    <button className={classes.buyNowButton}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </GridItem>
            </Parallax>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* GridContainer Component */}
        <GridContainer alignItems="center" justifyContent="center">
          {/* GridItem Component */}
          <GridItem xs={6}>
            <div>
              {/* Mapping through posts and rendering BlogCard Component */}
              {posts.map((post, index) => (
                <BlogCard post={post} key={index} />
              ))}
            </div>
          </GridItem>
        </GridContainer>
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
 </>
    );
}

// Define the type for posts
interface PostType {
  title: string;
  description: string;
  published: string;
  image_url: string;
  slug: string;
}

// Function to fetch static props
export const getStaticProps = async () => {
  const articles: PostType[] = await getAllArticles();

  articles
    .map((post) => post)
    .sort((a, b) => {
      if (a.published > b.published) return 1;
      if (a.published < b.published) return -1;

      return 0;
    });

  // Formatting published date for each post
  const posts = articles.map((post) => {
    return {
      ...post,
      published: new Date(post.published).toDateString(),
    };
  });

  // Returning props
  return {
    props: {
      posts,
    },
  };
};

// Function to define styles
const useStyles = makeStyles(
  { styles }, // Importing buttonStyle2
  (theme: Theme) => ({
    // Your styles definition remains the same
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(2),
    },
    // Overriding button styles using buttonStyle2
    viewInStoreButton: {
      ...buttonStyle2.default,
      marginRight: theme.spacing(2),
      // Add other styles as needed
    },
    buyNowButton: {
      ...buttonStyle2.default,
      // Add other styles as needed
    },
  })
) as (theme: Theme) => CustomStyles; // Cast the result of makeStyles to your custom interface