# riviklabs
Mobile Applications

## Deploy to Cloudflare

The site is already published at https://riviklabs.qzz.io.

To enable automatic deployments from GitHub:

1. Add the following GitHub repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
2. Push to the `main` branch to trigger the workflow.
3. Run `npm run deploy:cloudflare` locally when you want to publish from your machine.
