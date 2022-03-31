# Learnt things in this Project

## First
- Need to install gatsby and use it to create a project
## Second
- What’s the difference between a page component and a building-block component?
- How do I add a new page to my Gatsby site?
- What are the three steps for writing a new React component?
- What are props and when might I use them?
- What is the children prop and why is it useful?

## Third
- What is the benefit to using a plugin in my Gatsby site?
- How would I add a new plugin to my Gatsby site?

## Fourth
- How do I get data into the data layer?
- How can I see what data is in the data layer?
- How do I get data out of the data layer?

## Fifth
- What is a transformer plugin? How do transformer plugins affect the data in the data layer?
- What is MDX? Why is it useful?
- **Key Takeaways**
  - Data in Gatsby’s GraphQL data layer is stored in nodes.
  - Each source plugin creates a different type of node with different fields.
  - Transformer plugins create new types of nodes, using data from existing source nodes as a starting point. Transformer plugins don’t actually change the original source nodes.
  - gatsby-plugin-mdx is a transformer plugin that lets I use MDX in my site. With MDX, I can create text content with Markdown formatting and embedded React components.
  
## Sixth (Gatsby’s filesystem route API)
- What is the File System Route API used for?
- What is the syntax for creating a new collection route?
- What is a query variable?
- When can I use a query variable?
- **Key Takeaways**
  - Gatsby’s File System Route API lets I dynamically create new pages from data layer nodes by naming my files with a special syntax.
  - File System Routes only work on files in the src/pages directory (or subdirectories).
  - To create a new collection route, I name my file {nodeType.field}.js, where nodeType is the type of node I want to create pages from, and field is the data field from that node type that I want to use in the URL for that page.
  - Query variables let I pass in different data values to the same GraphQL query. They can be combined with field arguments to get back data only about a specific node.
  - Query variables can only be used in page queries.


## Seventh
- When should I use the GatsbyImage component instead of the StaticImage component?
- **Key Takeaways**
  - Use the StaticImage component if your component always renders the same image (from a relative path or a remote URL).
  - Use the GatsbyImage component if the image source changes for different instances of your component (like if it gets passed in as a prop).