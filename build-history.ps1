$env:GIT_AUTHOR_NAME = "Callixen"
$env:GIT_AUTHOR_EMAIL = "email@callixen.com"
$env:GIT_COMMITTER_NAME = "Callixen"
$env:GIT_COMMITTER_EMAIL = "email@callixen.com"

# Commit 1: Initial scaffold — 20:58
$env:GIT_AUTHOR_DATE = "2026-03-18T20:58:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T20:58:00+01:00"
git add index.html
git commit -m "init: gallery page scaffold"

# Commit 2: Base styles — 21:06
$env:GIT_AUTHOR_DATE = "2026-03-18T21:06:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T21:06:00+01:00"
git add styles.css
git commit -m "add base styles, dark editorial layout"

# Commit 3: Script — 21:12
$env:GIT_AUTHOR_DATE = "2026-03-18T21:12:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T21:12:00+01:00"
git add script.js
git commit -m "add scroll reveal + index highlighting"

# Commit 4: Art page HTML — 21:24
$env:GIT_AUTHOR_DATE = "2026-03-18T21:24:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T21:24:00+01:00"
git add art.html
git commit -m "add art page with initial 6 pieces"

# Commit 5: Art styles — 21:29
$env:GIT_AUTHOR_DATE = "2026-03-18T21:29:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T21:29:00+01:00"
git add art-styles.css
git commit -m "art page styles: grid, frames, lightbox"

# Commit 6: Art script — 21:33
$env:GIT_AUTHOR_DATE = "2026-03-18T21:33:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T21:33:00+01:00"
git add art-script.js
git commit -m "art page interactivity + lightbox overlay"

# Commit 7: First batch of art — 21:41
$env:GIT_AUTHOR_DATE = "2026-03-18T21:41:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T21:41:00+01:00"
git add art/turbulent-shore.png art/twisted-tree.png art/burning-city.png
git commit -m "add works I-III"

# Commit 8: Second batch — 21:48
$env:GIT_AUTHOR_DATE = "2026-03-18T21:48:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T21:48:00+01:00"
git add art/vortex-sky.png art/crumbling-bridge.png art/melting-flowers.png
git commit -m "add works IV-VI"

# Commit 9: Third batch — 22:15
$env:GIT_AUTHOR_DATE = "2026-03-18T22:15:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T22:15:00+01:00"
git add art/shattered-mirror.png art/drowning-cathedral.png
git commit -m "add works VII-VIII"

# Commit 10: Final batch — 22:27
$env:GIT_AUTHOR_DATE = "2026-03-18T22:27:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T22:27:00+01:00"
git add art/endless-staircase.png art/erupting-mountain.png
git commit -m "add works IX-X"

# Commit 11: Polish — 22:44
$env:GIT_AUTHOR_DATE = "2026-03-18T22:44:00+01:00"
$env:GIT_COMMITTER_DATE = "2026-03-18T22:44:00+01:00"
git add -A
git commit -m "final polish, cross-link gallery and art pages" --allow-empty

Write-Host "Done. Commit history built."
