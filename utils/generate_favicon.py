import matplotlib.pyplot as plt

# 1. Create a blank figure (adjust figsize as needed)
fig = plt.figure(figsize=(6, 2))

# 2. Add centered text using figure coordinates (0.5, 0.5 is exact center)
fig.text(
    0.5,
    0.5,
    "MD",
    ha="center",  # Horizontal alignment
    va="center",  # Vertical alignment
    fontsize=64,
    color="white",
)

# 3. Save as SVG with a transparent background
plt.savefig(
    "md_favicon.svg",
    format="svg",
    transparent=True,
    bbox_inches="tight",  # Trims excess whitespace around the text
    pad_inches=-0.05,  # Adds slight padding so glyphs aren't clipped
)
plt.close(fig)
