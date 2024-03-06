import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

// Define the custom styles interface
interface CustomStyles extends ClassNameMap<"styles"> {
  container: string;
  // Add other properties if needed
}

// Define the type for posts
interface PostType {
  title: string;
  description: string;
  published: string;
  image_url: string;
  slug: string;
}

// Define the component function
const BlogPage: React.FC<{ posts: PostType[] }> = (props) => {
  // Define styles using makeStyles hook
  const useStyles = makeStyles((theme: Theme) => ({
    container: {
      backgroundColor: "red", // Example: Add actual CSS properties here
      padding: theme.spacing(2), // Example: Using theme spacing
    },
    // Add other styles if needed
  }));

  // Get classes object using useStyles hook
  const classes = useStyles();

  // Extract props
  const { posts } = props;

  // JSX structure and logic
  return (
    <div className={classes.container}>
      {/* Your JSX content */}
    </div>
  );
};

// Export the component
export default BlogPage;
