# 🚀 Vercel Deployment Guide

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - MO Coffee & Roastery"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! 🎉

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

## ✅ Pre-Deployment Checklist

- [x] Build tested successfully (`npm run build`)
- [x] `vercel.json` configuration created
- [x] `.gitignore` file configured
- [x] All dependencies installed
- [x] SEO meta tags added
- [x] Dark mode working
- [x] Multi-language support implemented
- [x] Images optimized
- [x] Social media links configured

## 🔧 Build Configuration

The project is configured with:
- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 18.x or higher

## 🌐 Custom Domain (Optional)

After deployment:
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain (e.g., `mocoffee.et`)
4. Follow DNS configuration instructions

## 📊 Performance

Your site is optimized with:
- ⚡ Lazy loading images
- 🎨 Optimized animations
- 📦 Code splitting
- 🗜️ Minified assets
- 🚀 CDN delivery via Vercel

## 🔍 Post-Deployment

After deployment, verify:
1. ✅ All pages load correctly
2. ✅ Dark mode toggle works
3. ✅ Language selector functions
4. ✅ Social media links work
5. ✅ Contact forms/WhatsApp links work
6. ✅ Mobile responsiveness
7. ✅ SEO meta tags visible (view page source)

## 🐛 Troubleshooting

**Build fails?**
- Check Node version (use 18.x or higher)
- Clear cache: `npm cache clean --force`
- Reinstall: `rm -rf node_modules && npm install`

**Blank page after deployment?**
- Check browser console for errors
- Verify all imports use correct paths
- Ensure all assets are in `public/` or imported

## 📞 Support

Need help? Contact:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Documentation: [vercel.com/docs](https://vercel.com/docs)

---

**Your site is ready to go live! 🎉☕✨**
