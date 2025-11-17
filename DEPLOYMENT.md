# Azure Deployment Guide

This guide will help you deploy the Student Reading Progress Viewer to Azure Static Web Apps.

## Prerequisites

- Azure account ([Create free account](https://azure.microsoft.com/free/))
- GitHub account
- Git repository (already set up)

## Deployment Options

### Option 1: Azure Static Web Apps (Recommended)

#### Step 1: Create Azure Static Web App

1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web App" and select it
4. Click "Create"

#### Step 2: Configure Basic Settings

- **Subscription**: Select your subscription
- **Resource Group**: Create new or use existing
- **Name**: `student-reading-progress-viewer` (or your preferred name)
- **Plan type**: Free (for development) or Standard (for production)
- **Region**: Choose closest to your users
- **Source**: GitHub

#### Step 3: Connect to GitHub

1. Click "Sign in with GitHub"
2. Authorize Azure to access your GitHub account
3. Select:
   - **Organization**: `nagarajpatil`
   - **Repository**: `excel-viewer`
   - **Branch**: `main`

#### Step 4: Build Configuration

- **Build Presets**: Select "Custom"
- **App location**: `/` (root directory)
- **Api location**: Leave empty
- **Output location**: `dist`

#### Step 5: Review and Create

1. Click "Review + create"
2. Review your settings
3. Click "Create"

Azure will now:
- Create the Static Web App resource
- Set up GitHub Actions workflow automatically
- Deploy your app

#### Step 6: Get Deployment Token (Manual Setup)

If you need to set up manually:

1. Go to your Static Web App in Azure Portal
2. Click "Manage deployment token"
3. Copy the token
4. In GitHub, go to your repository settings
5. Navigate to "Secrets and variables" > "Actions"
6. Create a new secret:
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: Paste the token

### Option 2: Manual Deployment via Azure CLI

```bash
# Install Azure CLI if not already installed
# Visit: https://docs.microsoft.com/cli/azure/install-azure-cli

# Login to Azure
az login

# Create resource group
az group create --name rg-excel-viewer --location eastus

# Create Static Web App
az staticwebapp create \
  --name student-reading-progress \
  --resource-group rg-excel-viewer \
  --source https://github.com/nagarajpatil/excel-viewer \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

## Build and Deploy

### Automatic Deployment

Once set up, every push to the `main` branch will automatically:
1. Trigger GitHub Actions workflow
2. Build the application
3. Deploy to Azure Static Web Apps

### Manual Build

To test the build locally before deploying:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build locally
npm run preview
```

## Post-Deployment Configuration

### Custom Domain (Optional)

1. In Azure Portal, go to your Static Web App
2. Click "Custom domains"
3. Click "Add"
4. Follow the instructions to add your custom domain
5. Configure DNS records as instructed

### Environment Variables

If you need to add environment variables:

1. In Azure Portal, go to your Static Web App
2. Click "Configuration"
3. Add your environment variables under "Application settings"

## Monitoring

### View Deployment Status

- GitHub: Check Actions tab in your repository
- Azure Portal: View deployment history in Static Web App overview

### Access Your App

After deployment completes:
- Default URL: `https://<app-name>.azurestaticapps.net`
- Custom domain: If configured

## Troubleshooting

### Build Fails

Check the GitHub Actions logs:
1. Go to your repository
2. Click "Actions" tab
3. Click on the failed workflow
4. Review the error logs

Common issues:
- Missing dependencies: Run `npm install` locally
- Build errors: Run `npm run build` locally to test
- Configuration issues: Verify build settings in Azure Portal

### App Not Loading

1. Check browser console for errors
2. Verify SharePoint URLs are accessible
3. Check Content Security Policy settings in `staticwebapp.config.json`

### SharePoint Authentication Issues

The app uses iframe embedding which requires:
- Users to be signed in to SharePoint
- Proper permissions on the SharePoint file
- CORS and CSP headers configured correctly

## Updating the App

To deploy updates:

1. Make changes to your code
2. Commit and push to `main` branch:
   ```bash
   git add .
   git commit -m "Update description"
   git push origin main
   ```
3. GitHub Actions will automatically deploy the changes

## Cost

Azure Static Web Apps pricing:
- **Free tier**: 
  - 100 GB bandwidth/month
  - 0.5 GB storage
  - Perfect for small apps
- **Standard tier**: 
  - Starting at ~$9/month
  - Custom domains
  - Increased quotas

## Support

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)

## Security Notes

- The app embeds SharePoint content via iframe
- Users must authenticate with SharePoint to view data
- No sensitive data is stored in the static app
- All data access is controlled by SharePoint permissions
