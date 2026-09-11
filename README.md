# Everything as Netflix

### Welcome 👋

This is [probably] purely an exercise to try to develop any interface like Netflix.
Since I am building v2.0 things may change.

![Dynamic](/images/git_cover.png)

## 🪄 Design / UI / Demo

- [UI Design in Behance](https://www.behance.net/gallery/113430881/What-if-Zillow-was-Netflix)
- [As Zillow Live Demo](https://zillow-demo.igcorreia.com/)
- [Interactive Protopie](https://cloud.protopie.io/p/0b943b0f92/2?ui=false&mockup=false&touchHint=true&scaleToFit=true&cursorType=touch)

## 🖥️ Target OS

The target is Chrome 48 which is used by a lot of Samsung Smart TVs

### 👉 Interactivity

Use number 2,4,6,8 to navigate in you TV Browser:

[1] **[2]** [3]

**[4]** [5] **[6]**

[7] **[8]** [9]

- 2 UP (Arrow Up)
- 4 Left (Arrow Left)
- 6 right (Arrow Right)
- 8 down (Arrow Down)

# Configuration

By default the app runs in `local` mode and reads `data/db.json`. To use the remote
JSON Generator API instead, set `mode: 'remote'` in `scripts/variables.js` and copy
`scripts/config.example.js` to `scripts/config.local.js` with your API key. The local
config file is gitignored and is never sent in local mode.

> The API key that used to live in `variables.js` is still present in git history and
> should be treated as public — rotate it on json-generator.com.

# Rules and Limitations

- Browser CSS and JS rules from Chrome 48 ( linear-gradient does not work)
- Touch the DOM as minimum as possible
- Sart Animation only after content and images are loaded
- Load everything on GPU
- Make it as dynamic as possible, data source should be enough to change everything
- Use a modern stack like Webpack, Babel, etc (type=module does not work)
- Fade Animation
- Different Type of Scrollers

# Credits

​​​​​​​All the logo and brands are copyright by Zillow, Inc. To learn more about the copyright Visit [Zillow Terms and Conditions](https://www.zillowgroup.com/terms-of-use/).

Photos from Unsplash

Icons some handmade others from [FontAwesome](https://fontawesome.com/)

### FOLLOW

[Twitter](https://www.twitter.com/igcorreia) ~ [Behance](https://www.behance.net/igcorreia) ~ [Dribbble](https://www.dribbble.com/igcorreia) ~ [Codepen](https://www.codepen.com/igcorreia)

### CONNECT

**@igcorreia** (Telegram, Instagram or Snapchat)