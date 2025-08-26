# Laser Cutting Design Guide

### Key Considerations

*   **Kerf**: The laser removes material during the cut. For interlocking parts, you may need to compensate for the kerf (typically 0.1-0.5mm).
*   **Minimum Feature Size**: Avoid features smaller than the material thickness, as they can be fragile or burn away.
*   **Corners**: Internal corners will have a slight radius. Add "dog-bone" reliefs if sharp internal corners are critical.
*   **Holes**: Minimum hole diameter should be at least equal to the material thickness. Keep holes away from edges.
*   **File Prep**: Use closed vector paths (DXF, SVG, AI). Ensure 1:1 scale and no overlapping lines. Differentiate cut and engrave lines by color or layer.
