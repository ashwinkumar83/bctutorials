# Sample configuration for setting up azure pipeline to deploy the bigcommerce storefront themes

# Cornerstone
(Visit https://github.com/bigcommerce/cornerstone to get the latest cornerstone)

Stencil's Cornerstone theme is the building block for BigCommerce theme developers to get started quickly developing premium quality themes on the BigCommerce platform.

# PipeLine Setup

1. Login Azure DevOps and create project
2. Clone or use this github repository for your pipeline
3. Create New Pipeline 
4. Connect and select this Github Repo 
5. In the configure step, select the Existing Azure Pipeline yaml file
6. Provide the path of the yaml file and click connect
7. Once the pipeline is created, set the variables as mentioned below in the variables tab of the pipeline

### Set the required variables for the pipeline in the variables tab

#### BC-STOREHASH - Store Hash of BigCommerce Store
#### BC-STENCIL_CLI_TOKEN - Stencil CLI Token 
#### BC-RELEASE_NAME - Release Name of your storefront theme file
#### BC-THEME_VARIATION - Theme variation name

8. Run the pipeline, it will upload and activate the deployed theme in your store url
9. The CICD is enabled. When you commit your code to this repository, it will automatically start the pipeline and deploy the theme

10. Hope it helps :)
