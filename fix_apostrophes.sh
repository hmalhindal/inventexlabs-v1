#!/bin/bash
find src/app -type f -name "*.tsx" | while read -r file; do
  awk '
    BEGIN { in_jsx=0 }
    {
      line = $0
      if (/<[a-zA-Z]/.test(line)) { in_jsx=1 }
      if (/<\//.test(line)) { in_jsx=0 }

      if (in_jsx) {
        gsub(/\x27/, "&apos;", line)
      }
      print line
    }
  ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done
