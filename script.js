let currentImage = null;

const FACE_OVAL = [
    10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,
    400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,
    54,103,67,109
];

const seasonPalettes = {
    "Light Spring": {
        "palette": [
            "#F7C8A5",
            "#FFE5B4",
            "#FFD166",
            "#B7E4C7",
            "#9ADBC9",
            "#BDE0FE",
            "#FFCAD4",
            "#F4A7B9"
        ],
        "undertone": "Warm Neutral",
        "depth": "Light",
        "contrast": "Low Medium",
        "makeup": {
            "best": [
                "#F4A7B9",
                "#FFB085",
                "#FFD1BA",
                "#FFCAD4",
                "#F7C8A5",
                "#F6C177"
            ],
            "good": [
                "#FFC8DD",
                "#FBCFE8",
                "#FFE5B4",
                "#B7E4C7",
                "#BDE0FE",
                "#FFD166"
            ],
            "avoid": [
                "#111827",
                "#1F2937",
                "#4C1D95",
                "#581C87",
                "#7F1D1D",
                "#36454F"
            ],
            "text": "Makeup terbaik: peach, aprikot, rose peach, dan coral lembut. Hindari warna terlalu gelap karena bisa membuat wajah terlihat berat."
        },
        "hijab": {
            "best": [
                "#FFE5B4",
                "#F7C8A5",
                "#B7E4C7",
                "#BDE0FE",
                "#FFCAD4",
                "#FFD166",
                "#E9ECEF",
                "#FBCFE8"
            ],
            "good": [
                "#A7F3D0",
                "#9ADBC9",
                "#FFC8DD",
                "#F4A7B9",
                "#FDE68A",
                "#FFD1BA",
                "#FFB997",
                "#CDB4DB"
            ],
            "avoid": [
                "#111827",
                "#0F172A",
                "#4C1D95",
                "#581C87",
                "#7F1D1D",
                "#431407",
                "#36454F",
                "#800020"
            ],
            "text": "Hijab paling aman: cream peach, mint pastel, powder blue, dan pink pastel. Pilih bahan matte agar warna kulit tetap lembut."
        },
        "outfit": {
            "best": [
                "#FFD166",
                "#A7F3D0",
                "#BDE0FE",
                "#FFCAD4",
                "#FFE5B4",
                "#F7C8A5",
                "#9ADBC9",
                "#F4A7B9"
            ],
            "good": [
                "#FDE68A",
                "#B7E4C7",
                "#FFC8DD",
                "#FBCFE8",
                "#E9ECEF",
                "#FFD1BA",
                "#F6C177",
                "#CDB4DB"
            ],
            "avoid": [
                "#1F2937",
                "#111827",
                "#581C87",
                "#4C1D95",
                "#7F1D1D",
                "#431407",
                "#36454F",
                "#334155"
            ],
            "text": "Outfit terbaik adalah warna terang, segar, dan hangat. Hindari blok warna hitam pekat dekat wajah."
        }
    },
    "Warm Spring": {
        "palette": [
            "#FFB703",
            "#FB8500",
            "#F4A261",
            "#FF7F50",
            "#E85D04",
            "#2A9D8F",
            "#FFE5B4",
            "#FFCAD4"
        ],
        "undertone": "Warm",
        "depth": "Medium",
        "contrast": "Medium",
        "makeup": {
            "best": [
                "#FF7F50",
                "#E85D04",
                "#F4A261",
                "#FFB085",
                "#F6C177",
                "#FFB997"
            ],
            "good": [
                "#FFD166",
                "#FFB703",
                "#FFD1BA",
                "#F7C8A5",
                "#E9C46A",
                "#FDE68A"
            ],
            "avoid": [
                "#94A3B8",
                "#6D28D9",
                "#818CF8",
                "#C0C0C0",
                "#0F172A",
                "#4B5563"
            ],
            "text": "Makeup terbaik: coral, peach, aprikot emas, dan golden eyeshadow. Hindari warna dingin keabuan."
        },
        "hijab": {
            "best": [
                "#F4A261",
                "#E9C46A",
                "#FFB703",
                "#FFE5B4",
                "#2A9D8F",
                "#FF7F50",
                "#FFD166",
                "#F7C8A5"
            ],
            "good": [
                "#FB8500",
                "#F77F00",
                "#FDE68A",
                "#FFCAD4",
                "#B7E4C7",
                "#9ADBC9",
                "#FFB997",
                "#F6C177"
            ],
            "avoid": [
                "#CBD5E1",
                "#818CF8",
                "#6D28D9",
                "#94A3B8",
                "#0F172A",
                "#334155",
                "#C0C0C0",
                "#A8A29E"
            ],
            "text": "Hijab ideal: peach, honey, warm turquoise, golden beige, dan coral. Warna ini membuat wajah tampak segar."
        },
        "outfit": {
            "best": [
                "#FB8500",
                "#FFB703",
                "#2A9D8F",
                "#F4A261",
                "#FF7F50",
                "#FFD166",
                "#FDE68A",
                "#B7E4C7"
            ],
            "good": [
                "#F97316",
                "#F77F00",
                "#E9C46A",
                "#FFE5B4",
                "#A7F3D0",
                "#FFCAD4",
                "#F6C177",
                "#E76F51"
            ],
            "avoid": [
                "#0F172A",
                "#A78BFA",
                "#6D28D9",
                "#4B5563",
                "#64748B",
                "#94A3B8",
                "#1F2937",
                "#C0C0C0"
            ],
            "text": "Outfit terbaik adalah warna hangat, clear, dan energik. Hindari warna dusty dingin yang menurunkan brightness wajah."
        }
    },
    "Clear Spring": {
        "palette": [
            "#FF6B6B",
            "#FFD93D",
            "#06D6A0",
            "#118AB2",
            "#FF85C0",
            "#EF476F",
            "#FFD166",
            "#3A86FF"
        ],
        "undertone": "Warm Neutral",
        "depth": "Medium",
        "contrast": "High",
        "makeup": {
            "best": [
                "#FF4D6D",
                "#FF7F50",
                "#EF476F",
                "#FF85C0",
                "#FF6B6B",
                "#FFD166"
            ],
            "good": [
                "#FFD93D",
                "#F4A261",
                "#FFB085",
                "#06D6A0",
                "#FFCAD4",
                "#F6C177"
            ],
            "avoid": [
                "#A8A29E",
                "#6B7280",
                "#78716C",
                "#57534E",
                "#B7B7A4",
                "#D6CCC2"
            ],
            "text": "Makeup terbaik: clear coral, watermelon pink, bright peach, dan vivid rose. Hindari warna dusty karena membuat hasil kurang hidup."
        },
        "hijab": {
            "best": [
                "#06D6A0",
                "#118AB2",
                "#FFD93D",
                "#FF85C0",
                "#FF6B6B",
                "#EF476F",
                "#3A86FF",
                "#FFD166"
            ],
            "good": [
                "#2A9D8F",
                "#BDE0FE",
                "#FF7F50",
                "#F4A261",
                "#A7F3D0",
                "#FDE68A",
                "#FFCAD4",
                "#FFFFFF"
            ],
            "avoid": [
                "#78716C",
                "#475569",
                "#57534E",
                "#A8A29E",
                "#B7B7A4",
                "#D6CCC2",
                "#6B7280",
                "#8A817C"
            ],
            "text": "Hijab terbaik: bright turquoise, clear yellow, fresh coral, dan cobalt. Kombinasi kontras bersih akan terlihat kuat."
        },
        "outfit": {
            "best": [
                "#EF476F",
                "#06D6A0",
                "#118AB2",
                "#FFD166",
                "#FF6B6B",
                "#FFD93D",
                "#3A86FF",
                "#FF85C0"
            ],
            "good": [
                "#2A9D8F",
                "#BDE0FE",
                "#FF7F50",
                "#F4A261",
                "#FFFFFF",
                "#FDE68A",
                "#A7F3D0",
                "#FFCAD4"
            ],
            "avoid": [
                "#57534E",
                "#334155",
                "#78716C",
                "#A8A29E",
                "#B7B7A4",
                "#D6CCC2",
                "#6B7280",
                "#8A817C"
            ],
            "text": "Outfit terbaik: warna cerah dengan kontras rapi. Jangan terlalu banyak memakai warna muted di dekat wajah."
        }
    },
    "Light Summer": {
        "palette": [
            "#BDE0FE",
            "#CDB4DB",
            "#FFC8DD",
            "#A2D2FF",
            "#E9ECEF",
            "#F9C5D1",
            "#B8C0FF",
            "#D8B4E2"
        ],
        "undertone": "Cool Neutral",
        "depth": "Light",
        "contrast": "Low",
        "makeup": {
            "best": [
                "#E8AEB7",
                "#D8B4E2",
                "#F9C5D1",
                "#FFC8DD",
                "#CDB4DB",
                "#B8C0FF"
            ],
            "good": [
                "#FBCFE8",
                "#A2D2FF",
                "#BDE0FE",
                "#E9ECEF",
                "#D6CCC2",
                "#CBC0D3"
            ],
            "avoid": [
                "#B45309",
                "#7C2D12",
                "#78350F",
                "#92400E",
                "#F97316",
                "#FB8500"
            ],
            "text": "Makeup terbaik: soft rose, dusty pink, light mauve, dan cool pink. Hindari cokelat-oranye yang terlalu hangat."
        },
        "hijab": {
            "best": [
                "#BDE0FE",
                "#CDB4DB",
                "#E9ECEF",
                "#FFC8DD",
                "#A2D2FF",
                "#F9C5D1",
                "#B8C0FF",
                "#D8B4E2"
            ],
            "good": [
                "#FBCFE8",
                "#CBD5E1",
                "#CBC0D3",
                "#D6CCC2",
                "#C0C0C0",
                "#E6E6FA",
                "#F0FFFF",
                "#B8A1C9"
            ],
            "avoid": [
                "#7C2D12",
                "#78350F",
                "#B45309",
                "#92400E",
                "#EA580C",
                "#F97316",
                "#8B4513",
                "#431407"
            ],
            "text": "Hijab terbaik: powder blue, lavender, misty pink, dove grey, dan soft mauve. Pilih intensitas lembut."
        },
        "outfit": {
            "best": [
                "#A2D2FF",
                "#CDB4DB",
                "#BDE0FE",
                "#FFC8DD",
                "#E9ECEF",
                "#FBCFE8",
                "#B8C0FF",
                "#D8B4E2"
            ],
            "good": [
                "#CBD5E1",
                "#CBC0D3",
                "#D6CCC2",
                "#F9C5D1",
                "#C0C0C0",
                "#E6E6FA",
                "#F0FFFF",
                "#B8A1C9"
            ],
            "avoid": [
                "#92400E",
                "#431407",
                "#78350F",
                "#7C2D12",
                "#B45309",
                "#F97316",
                "#8B4513",
                "#FB8500"
            ],
            "text": "Outfit terbaik: soft, cool, airy, dan low contrast. Warna gelap hangat bisa terlihat terlalu keras."
        }
    },
    "Cool Summer": {
        "palette": [
            "#8ECAE6",
            "#A7B8D8",
            "#B8A1C9",
            "#D8A7B1",
            "#6B7280",
            "#C08497",
            "#94A3B8",
            "#CBC0D3"
        ],
        "undertone": "Cool",
        "depth": "Medium",
        "contrast": "Medium",
        "makeup": {
            "best": [
                "#C08497",
                "#A78BFA",
                "#D8A7B1",
                "#B08998",
                "#CBC0D3",
                "#B8A1C9"
            ],
            "good": [
                "#94A3B8",
                "#A7B8D8",
                "#8ECAE6",
                "#E8AEB7",
                "#F9C5D1",
                "#CDB4DB"
            ],
            "avoid": [
                "#F97316",
                "#B45309",
                "#EA580C",
                "#92400E",
                "#CA8A04",
                "#D97706"
            ],
            "text": "Makeup terbaik: rose, mauve, berry pink, dan cool taupe. Hindari orange-brown yang terlalu hangat."
        },
        "hijab": {
            "best": [
                "#8ECAE6",
                "#A7B8D8",
                "#B8A1C9",
                "#94A3B8",
                "#D8A7B1",
                "#C08497",
                "#CBC0D3",
                "#6B7280"
            ],
            "good": [
                "#BDE0FE",
                "#CDB4DB",
                "#E9ECEF",
                "#A2D2FF",
                "#9CA3AF",
                "#CBD5E1",
                "#B8C0FF",
                "#D6CCC2"
            ],
            "avoid": [
                "#EA580C",
                "#92400E",
                "#F97316",
                "#B45309",
                "#CA8A04",
                "#D97706",
                "#FB8500",
                "#F77F00"
            ],
            "text": "Hijab ideal: slate blue, mauve, dusty lavender, cool grey, dan rose berry. Pilih warna yang lembut dan dingin."
        },
        "outfit": {
            "best": [
                "#64748B",
                "#8ECAE6",
                "#A7B8D8",
                "#C08497",
                "#B8A1C9",
                "#94A3B8",
                "#6B7280",
                "#CBC0D3"
            ],
            "good": [
                "#BDE0FE",
                "#CDB4DB",
                "#E9ECEF",
                "#A2D2FF",
                "#9CA3AF",
                "#CBD5E1",
                "#D8A7B1",
                "#B8C0FF"
            ],
            "avoid": [
                "#C2410C",
                "#78350F",
                "#EA580C",
                "#F97316",
                "#B45309",
                "#CA8A04",
                "#D97706",
                "#FB8500"
            ],
            "text": "Outfit terbaik: cool muted shades dengan soft contrast. Hindari warna hangat tajam di area dekat wajah."
        }
    },
    "Soft Summer": {
        "palette": [
            "#A8A29E",
            "#B7B7A4",
            "#CBC0D3",
            "#9CA3AF",
            "#D6CCC2",
            "#B08998",
            "#8D99AE",
            "#A38F85"
        ],
        "undertone": "Cool Neutral",
        "depth": "Medium",
        "contrast": "Low",
        "makeup": {
            "best": [
                "#B08998",
                "#A38F85",
                "#CBC0D3",
                "#D6CCC2",
                "#D8A7B1",
                "#E8AEB7"
            ],
            "good": [
                "#A8A29E",
                "#B7B7A4",
                "#9CA3AF",
                "#8D99AE",
                "#C08497",
                "#B8A1C9"
            ],
            "avoid": [
                "#FFB703",
                "#DC2626",
                "#EF233C",
                "#FF006E",
                "#FFD93D",
                "#06D6A0"
            ],
            "text": "Makeup terbaik: muted rose, soft plum, cool nude, dan dusty mauve. Hindari warna neon atau terlalu clear."
        },
        "hijab": {
            "best": [
                "#A8A29E",
                "#CBC0D3",
                "#9CA3AF",
                "#D6CCC2",
                "#B7B7A4",
                "#8D99AE",
                "#B08998",
                "#A38F85"
            ],
            "good": [
                "#D8A7B1",
                "#B8A1C9",
                "#A7B8D8",
                "#CBD5E1",
                "#6B7280",
                "#64748B",
                "#E9ECEF",
                "#C0C0C0"
            ],
            "avoid": [
                "#F97316",
                "#B91C1C",
                "#DC2626",
                "#FFB703",
                "#EF233C",
                "#FF006E",
                "#06D6A0",
                "#FFD93D"
            ],
            "text": "Hijab terbaik: mushroom, dusty mauve, soft grey, muted blue, dan taupe rose. Warna harus tenang dan tidak terlalu terang."
        },
        "outfit": {
            "best": [
                "#8D99AE",
                "#B7B7A4",
                "#CBC0D3",
                "#A8A29E",
                "#9CA3AF",
                "#D6CCC2",
                "#B08998",
                "#A38F85"
            ],
            "good": [
                "#A7B8D8",
                "#D8A7B1",
                "#B8A1C9",
                "#CBD5E1",
                "#6B7280",
                "#64748B",
                "#E9ECEF",
                "#C0C0C0"
            ],
            "avoid": [
                "#F59E0B",
                "#DC2626",
                "#FFB703",
                "#EF233C",
                "#FF006E",
                "#06D6A0",
                "#FFD93D",
                "#FB8500"
            ],
            "text": "Outfit terbaik: muted, powdery, dan low contrast. Hindari saturation tinggi yang membuat wajah terlihat kusam."
        }
    },
    "Warm Autumn": {
        "palette": [
            "#F4A261",
            "#E76F51",
            "#2A9D8F",
            "#264653",
            "#F77F00",
            "#E2725B",
            "#6B8E23",
            "#8B4513"
        ],
        "undertone": "Warm",
        "depth": "Medium",
        "contrast": "Medium",
        "makeup": {
            "best": [
                "#E2725B",
                "#D4A574",
                "#B5651D",
                "#C68E6A",
                "#CB997E",
                "#B08968"
            ],
            "good": [
                "#FFB997",
                "#F4A261",
                "#DDB892",
                "#DAA520",
                "#A98467",
                "#CD853F"
            ],
            "avoid": [
                "#C0C0C0",
                "#6A5ACD",
                "#87CEFA",
                "#E6E6FA",
                "#FF69B4",
                "#00FFFF"
            ],
            "text": "Makeup terbaik: terracotta, caramel, bronze, dan warm nude. Hindari silver, pastel dingin, dan pink neon."
        },
        "hijab": {
            "best": [
                "#6B8E23",
                "#8B4513",
                "#E2725B",
                "#DAA520",
                "#A98467",
                "#556B2F",
                "#F4A261",
                "#D2691E"
            ],
            "good": [
                "#2A9D8F",
                "#CD853F",
                "#DDB892",
                "#C2A878",
                "#B08968",
                "#CB997E",
                "#E9C46A",
                "#F5DEB3"
            ],
            "avoid": [
                "#87CEFA",
                "#E6E6FA",
                "#C0C0C0",
                "#FF69B4",
                "#00FFFF",
                "#818CF8",
                "#BDE0FE",
                "#F0FFFF"
            ],
            "text": "Hijab terbaik: olive, mocha, terracotta, mustard, camel, dan cinnamon. Warna bumi akan terlihat paling harmonis."
        },
        "outfit": {
            "best": [
                "#D2691E",
                "#556B2F",
                "#8B4513",
                "#E2725B",
                "#DAA520",
                "#A98467",
                "#2A9D8F",
                "#F4A261"
            ],
            "good": [
                "#CD853F",
                "#F5DEB3",
                "#DDB892",
                "#C2A878",
                "#6B8E23",
                "#B5651D",
                "#CB997E",
                "#264653"
            ],
            "avoid": [
                "#00FFFF",
                "#FF69B4",
                "#87CEFA",
                "#E6E6FA",
                "#C0C0C0",
                "#6A5ACD",
                "#BDE0FE",
                "#F0FFFF"
            ],
            "text": "Outfit terbaik: earth tones, olive, camel, rust, dan warm teal. Hindari warna icy atau neon."
        }
    },
    "Soft Autumn": {
        "palette": [
            "#C2A878",
            "#A98467",
            "#ADC178",
            "#DDB892",
            "#8A817C",
            "#B08968",
            "#CB997E",
            "#6B705C"
        ],
        "undertone": "Warm Neutral",
        "depth": "Medium",
        "contrast": "Low",
        "makeup": {
            "best": [
                "#B08968",
                "#CB997E",
                "#DDB892",
                "#A98467",
                "#A5A58D",
                "#C2A878"
            ],
            "good": [
                "#A38F85",
                "#B7B7A4",
                "#ADC178",
                "#D6CCC2",
                "#C68E6A",
                "#FFB997"
            ],
            "avoid": [
                "#0EA5E9",
                "#EC4899",
                "#2563EB",
                "#DB2777",
                "#FF006E",
                "#06D6A0"
            ],
            "text": "Makeup terbaik: soft terracotta, warm nude, muted peach, dan caramel nude. Hindari warna elektrik dan terlalu dingin."
        },
        "hijab": {
            "best": [
                "#ADC178",
                "#A98467",
                "#C2A878",
                "#DDB892",
                "#B08968",
                "#CB997E",
                "#6B705C",
                "#8A817C"
            ],
            "good": [
                "#B7B7A4",
                "#A38F85",
                "#D6CCC2",
                "#F5DEB3",
                "#C68E6A",
                "#FFB997",
                "#6B8E23",
                "#E9C46A"
            ],
            "avoid": [
                "#2563EB",
                "#DB2777",
                "#0EA5E9",
                "#EC4899",
                "#FF006E",
                "#06D6A0",
                "#3A86FF",
                "#EF233C"
            ],
            "text": "Hijab terbaik: sage, camel, warm taupe, dusty peach, dan muted olive. Pilih warna lembut, tidak terlalu cerah."
        },
        "outfit": {
            "best": [
                "#A98467",
                "#6B705C",
                "#CB997E",
                "#B7B7A4",
                "#ADC178",
                "#C2A878",
                "#DDB892",
                "#8A817C"
            ],
            "good": [
                "#A38F85",
                "#D6CCC2",
                "#F5DEB3",
                "#B08968",
                "#6B8E23",
                "#C68E6A",
                "#CD853F",
                "#E9C46A"
            ],
            "avoid": [
                "#0284C7",
                "#BE185D",
                "#2563EB",
                "#DB2777",
                "#FF006E",
                "#06D6A0",
                "#3A86FF",
                "#EF233C"
            ],
            "text": "Outfit terbaik: muted warm neutrals dan low contrast earth tones. Hindari warna terlalu jernih atau neon."
        }
    },
    "Deep Autumn": {
        "palette": [
            "#8B4513",
            "#A0522D",
            "#CD853F",
            "#DAA520",
            "#B8860B",
            "#3E2723",
            "#800020",
            "#00695C"
        ],
        "undertone": "Warm",
        "depth": "Deep",
        "contrast": "High",
        "makeup": {
            "best": [
                "#5D4037",
                "#B5651D",
                "#8D5524",
                "#7C2D12",
                "#800020",
                "#A0522D"
            ],
            "good": [
                "#DAA520",
                "#B8860B",
                "#7B1FA2",
                "#991B1B",
                "#4A2C2A",
                "#701C1B"
            ],
            "avoid": [
                "#ADD8E6",
                "#FFB6C1",
                "#F0FFFF",
                "#FFE4E1",
                "#BDE0FE",
                "#FBCFE8"
            ],
            "text": "Makeup terbaik: rich brown, bronze, deep terracotta, dan wine brown. Hindari pastel pucat karena bisa terlihat lepas dari fitur wajah."
        },
        "hijab": {
            "best": [
                "#3E2723",
                "#800020",
                "#00695C",
                "#2E7D32",
                "#8B4513",
                "#4A2C2A",
                "#701C1B",
                "#264653"
            ],
            "good": [
                "#A0522D",
                "#DAA520",
                "#B8860B",
                "#7B1FA2",
                "#2E8B57",
                "#36454F",
                "#CD853F",
                "#556B2F"
            ],
            "avoid": [
                "#F0FFFF",
                "#FFE4E1",
                "#ADD8E6",
                "#FFB6C1",
                "#BDE0FE",
                "#FBCFE8",
                "#A2D2FF",
                "#E6E6FA"
            ],
            "text": "Hijab terbaik: chocolate, burgundy, deep teal, forest green, dan warm navy. Warna pekat memberi definisi yang kuat."
        },
        "outfit": {
            "best": [
                "#4A2C2A",
                "#701C1B",
                "#2E8B57",
                "#36454F",
                "#3E2723",
                "#800020",
                "#00695C",
                "#8B4513"
            ],
            "good": [
                "#A0522D",
                "#DAA520",
                "#B8860B",
                "#7B1FA2",
                "#CD853F",
                "#556B2F",
                "#264653",
                "#991B1B"
            ],
            "avoid": [
                "#FF69B4",
                "#00CED1",
                "#ADD8E6",
                "#FFB6C1",
                "#F0FFFF",
                "#FFE4E1",
                "#BDE0FE",
                "#FBCFE8"
            ],
            "text": "Outfit terbaik: rich brown, emerald, aubergine, burgundy, dan warm navy. Hindari pastel manis dan neon."
        }
    },
    "Deep Winter": {
        "palette": [
            "#111827",
            "#1E3A8A",
            "#7F1D1D",
            "#064E3B",
            "#F8FAFC",
            "#881337",
            "#020617",
            "#3A0CA3"
        ],
        "undertone": "Cool Neutral",
        "depth": "Deep",
        "contrast": "High",
        "makeup": {
            "best": [
                "#7F1D1D",
                "#581C87",
                "#991B1B",
                "#0F172A",
                "#881337",
                "#3A0CA3"
            ],
            "good": [
                "#BE123C",
                "#1E3A8A",
                "#111827",
                "#064E3B",
                "#020617",
                "#7C3AED"
            ],
            "avoid": [
                "#FDE68A",
                "#F4A261",
                "#FED7AA",
                "#FBBF24",
                "#FFD166",
                "#DDB892"
            ],
            "text": "Makeup terbaik: deep berry, wine, plum, dan clean eyeliner. Hindari warna warm pastel atau kuning lembut dekat wajah."
        },
        "hijab": {
            "best": [
                "#111827",
                "#1E3A8A",
                "#7F1D1D",
                "#064E3B",
                "#F8FAFC",
                "#020617",
                "#881337",
                "#3A0CA3"
            ],
            "good": [
                "#BE123C",
                "#2563EB",
                "#0F172A",
                "#FFFFFF",
                "#7C3AED",
                "#065F46",
                "#991B1B",
                "#1E40AF"
            ],
            "avoid": [
                "#FED7AA",
                "#FBBF24",
                "#FDE68A",
                "#F4A261",
                "#FFD166",
                "#DDB892",
                "#FFE5B4",
                "#F7C8A5"
            ],
            "text": "Hijab terbaik: black, navy, wine, emerald, icy white, dan plum gelap. Kontras tegas akan terlihat paling elegan."
        },
        "outfit": {
            "best": [
                "#020617",
                "#1E40AF",
                "#881337",
                "#065F46",
                "#111827",
                "#1E3A8A",
                "#7F1D1D",
                "#F8FAFC"
            ],
            "good": [
                "#BE123C",
                "#2563EB",
                "#0F172A",
                "#FFFFFF",
                "#7C3AED",
                "#3A0CA3",
                "#991B1B",
                "#064E3B"
            ],
            "avoid": [
                "#F59E0B",
                "#D97706",
                "#FED7AA",
                "#FBBF24",
                "#FDE68A",
                "#F4A261",
                "#FFD166",
                "#DDB892"
            ],
            "text": "Outfit terbaik: deep, crisp colors dengan strong contrast. Hindari warm muted shades yang melembutkan kontras alami."
        }
    },
    "Cool Winter": {
        "palette": [
            "#0F172A",
            "#2563EB",
            "#BE123C",
            "#7C3AED",
            "#E0F2FE",
            "#DB2777",
            "#1D4ED8",
            "#111827"
        ],
        "undertone": "Cool",
        "depth": "Medium Deep",
        "contrast": "High",
        "makeup": {
            "best": [
                "#BE123C",
                "#7C3AED",
                "#DB2777",
                "#1D4ED8",
                "#EF233C",
                "#FF006E"
            ],
            "good": [
                "#0F172A",
                "#2563EB",
                "#E0F2FE",
                "#A78BFA",
                "#3A86FF",
                "#C1121F"
            ],
            "avoid": [
                "#D97706",
                "#A16207",
                "#F97316",
                "#CA8A04",
                "#B45309",
                "#F4A261"
            ],
            "text": "Makeup terbaik: blue-red, raspberry, cool fuchsia, dan sharp black liner. Hindari warna mustard dan orange-brown."
        },
        "hijab": {
            "best": [
                "#0F172A",
                "#2563EB",
                "#BE123C",
                "#E0F2FE",
                "#7C3AED",
                "#1D4ED8",
                "#DB2777",
                "#111827"
            ],
            "good": [
                "#3A86FF",
                "#FFFFFF",
                "#EF233C",
                "#A78BFA",
                "#C1121F",
                "#BDE0FE",
                "#1E3A8A",
                "#FF006E"
            ],
            "avoid": [
                "#F97316",
                "#CA8A04",
                "#D97706",
                "#A16207",
                "#B45309",
                "#F4A261",
                "#E9C46A",
                "#A98467"
            ],
            "text": "Hijab terbaik: true navy, royal blue, raspberry, violet, dan icy blue. Warna dingin jernih memberi efek segar."
        },
        "outfit": {
            "best": [
                "#1E3A8A",
                "#BE123C",
                "#111827",
                "#7C3AED",
                "#0F172A",
                "#2563EB",
                "#DB2777",
                "#E0F2FE"
            ],
            "good": [
                "#3A86FF",
                "#FFFFFF",
                "#EF233C",
                "#A78BFA",
                "#C1121F",
                "#BDE0FE",
                "#1D4ED8",
                "#FF006E"
            ],
            "avoid": [
                "#B45309",
                "#854D0E",
                "#F97316",
                "#CA8A04",
                "#D97706",
                "#A16207",
                "#F4A261",
                "#E9C46A"
            ],
            "text": "Outfit terbaik: cool, saturated, dan high contrast. Hindari warm earth tones yang membuat wajah terlihat berat."
        }
    },
    "Clear Winter": {
        "palette": [
            "#000000",
            "#FFFFFF",
            "#EF233C",
            "#3A86FF",
            "#8338EC",
            "#FF006E",
            "#C1121F",
            "#0F172A"
        ],
        "undertone": "Cool Neutral",
        "depth": "Medium Deep",
        "contrast": "High",
        "makeup": {
            "best": [
                "#EF233C",
                "#C1121F",
                "#FF006E",
                "#3A0CA3",
                "#BE123C",
                "#8338EC"
            ],
            "good": [
                "#000000",
                "#FFFFFF",
                "#3A86FF",
                "#7C3AED",
                "#DB2777",
                "#E0F2FE"
            ],
            "avoid": [
                "#A8A29E",
                "#B7B7A4",
                "#D6CCC2",
                "#8A817C",
                "#78716C",
                "#A38F85"
            ],
            "text": "Makeup terbaik: clear red, vivid berry, blue pink, dan precise contrast. Hindari warna dusty atau terlalu abu."
        },
        "hijab": {
            "best": [
                "#000000",
                "#3A86FF",
                "#EF233C",
                "#FFFFFF",
                "#8338EC",
                "#FF006E",
                "#C1121F",
                "#0F172A"
            ],
            "good": [
                "#2563EB",
                "#BE123C",
                "#7C3AED",
                "#E0F2FE",
                "#111827",
                "#BDE0FE",
                "#1E3A8A",
                "#DB2777"
            ],
            "avoid": [
                "#A8A29E",
                "#D6CCC2",
                "#B7B7A4",
                "#78716C",
                "#8A817C",
                "#A38F85",
                "#57534E",
                "#9CA3AF"
            ],
            "text": "Hijab terbaik: black-white contrast, cobalt, cherry red, pure white, dan vivid violet. Kontras bersih adalah kunci."
        },
        "outfit": {
            "best": [
                "#000000",
                "#EF233C",
                "#3A86FF",
                "#8338EC",
                "#FFFFFF",
                "#FF006E",
                "#C1121F",
                "#0F172A"
            ],
            "good": [
                "#2563EB",
                "#BE123C",
                "#7C3AED",
                "#E0F2FE",
                "#111827",
                "#BDE0FE",
                "#1E3A8A",
                "#DB2777"
            ],
            "avoid": [
                "#78716C",
                "#A8A29E",
                "#D6CCC2",
                "#B7B7A4",
                "#8A817C",
                "#A38F85",
                "#57534E",
                "#9CA3AF"
            ],
            "text": "Outfit terbaik: bright, crisp colors dengan clarity tinggi. Hindari warna muted karena dapat mengurangi efek clean contrast."
        }
    }
};

document.getElementById('photoUpload').addEventListener('change', handleUpload);
document.getElementById('newAnalysisBtn').addEventListener('click', () => location.reload());

function handleUpload(e){
    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();
    reader.onload = function(event){
        currentImage = event.target.result;
        startAnalysis(currentImage);
    };
    reader.readAsDataURL(file);
}

async function startAnalysis(image){
    document.getElementById('uploadSection').classList.add('hidden');
    document.getElementById('loadingSection').classList.remove('hidden');
    document.getElementById('previewImage').src = image;

    try{
        updateProgress(8,'Loading image...');
        await wait(150);

        updateProgress(22,'Detecting face contour...');
        const analysis = await analyzePortrait(image, updateProgress);

        updateProgress(100,'Preparing recommendations...');
        await wait(300);

        showResults(analysis);
    }catch(error){
        console.error(error);
        updateProgress(100,'Analysis completed with fallback mode.');
        await wait(300);
        const fallback = await analyzePortraitFallback(image);
        fallback.warning = 'Face detection gagal, jadi sistem memakai crop oval di tengah foto. Untuk hasil terbaik, gunakan foto wajah depan dengan cahaya rata.';
        showResults(fallback);
    }
}

function updateProgress(percent, text){
    document.getElementById('progressBar').style.width = `${percent}%`;
    document.getElementById('loadingText').textContent = text;
}

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function analyzePortrait(imageSrc, progressCallback){
    const img = await loadImage(imageSrc);
    const base = drawImageToCanvas(img, 900);

    progressCallback(40,'Isolating face from background...');
    const landmarks = await detectFaceLandmarks(img);

    if(!landmarks){
        return analyzeCanvasWithFallbackMask(base.canvas, base.ctx, imageSrc);
    }

    const maskCanvas = createFaceOvalMask(base.canvas.width, base.canvas.height, landmarks);
    const isolatedFace = createIsolatedFaceCanvas(base.canvas, maskCanvas);

    progressCallback(62,'Sampling clean skin pixels...');
    const skinSamples = collectSkinSamples(base.ctx, maskCanvas, landmarks, base.canvas.width, base.canvas.height);

    progressCallback(78,'Calculating undertone, depth, and contrast...');
    return buildAnalysisResult(base.ctx, maskCanvas, skinSamples, isolatedFace.toDataURL('image/png'), true, null);
}

async function analyzePortraitFallback(imageSrc){
    const img = await loadImage(imageSrc);
    const base = drawImageToCanvas(img, 900);
    return analyzeCanvasWithFallbackMask(base.canvas, base.ctx, imageSrc);
}

function analyzeCanvasWithFallbackMask(canvas, ctx, imageSrc){
    const maskCanvas = createFallbackOvalMask(canvas.width, canvas.height);
    const isolatedFace = createIsolatedFaceCanvas(canvas, maskCanvas);
    const skinSamples = collectSkinSamples(ctx, maskCanvas, null, canvas.width, canvas.height);

    return buildAnalysisResult(
        ctx,
        maskCanvas,
        skinSamples,
        isolatedFace.toDataURL('image/png') || imageSrc,
        false,
        'Face contour tidak terdeteksi sempurna. Sistem memakai fallback oval dan tetap mengabaikan area background.'
    );
}

function loadImage(src){
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

function drawImageToCanvas(img, maxSize){
    const scale = Math.min(maxSize / img.naturalWidth, maxSize / img.naturalHeight, 1);
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));

    const ctx = canvas.getContext('2d', { willReadFrequently:true });
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    return { canvas, ctx };
}

async function detectFaceLandmarks(img){
    if(!window.FaceMesh){
        return null;
    }

    return new Promise(async resolve => {
        let resolved = false;
        const done = value => {
            if(resolved) return;
            resolved = true;
            resolve(value);
        };

        try{
            const faceMesh = new FaceMesh({
                locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
            });

            faceMesh.setOptions({
                maxNumFaces:1,
                refineLandmarks:true,
                minDetectionConfidence:.62,
                minTrackingConfidence:.62
            });

            faceMesh.onResults(results => {
                const face = results.multiFaceLandmarks && results.multiFaceLandmarks.length
                    ? results.multiFaceLandmarks[0]
                    : null;
                done(face);
                if(faceMesh.close) faceMesh.close();
            });

            setTimeout(() => done(null), 4500);
            await faceMesh.send({ image:img });
        }catch(error){
            console.warn('FaceMesh fallback:', error);
            done(null);
        }
    });
}

function createFaceOvalMask(width, height, landmarks){
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = width;
    maskCanvas.height = height;
    const maskCtx = maskCanvas.getContext('2d');

    maskCtx.clearRect(0,0,width,height);
    maskCtx.fillStyle = '#fff';
    maskCtx.beginPath();

    FACE_OVAL.forEach((index, i) => {
        const point = landmarks[index];
        const x = point.x * width;
        const y = point.y * height;
        if(i === 0){
            maskCtx.moveTo(x, y);
        }else{
            maskCtx.lineTo(x, y);
        }
    });

    maskCtx.closePath();
    maskCtx.fill();

    return softenMask(maskCanvas, 3);
}

function createFallbackOvalMask(width, height){
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = width;
    maskCanvas.height = height;
    const maskCtx = maskCanvas.getContext('2d');

    maskCtx.fillStyle = '#fff';
    maskCtx.beginPath();
    maskCtx.ellipse(width * .5, height * .43, width * .28, height * .34, 0, 0, Math.PI * 2);
    maskCtx.fill();

    return softenMask(maskCanvas, 4);
}

function softenMask(maskCanvas, blurAmount){
    const soft = document.createElement('canvas');
    soft.width = maskCanvas.width;
    soft.height = maskCanvas.height;
    const softCtx = soft.getContext('2d');

    softCtx.filter = `blur(${blurAmount}px)`;
    softCtx.drawImage(maskCanvas, 0, 0);
    softCtx.filter = 'none';

    return soft;
}

function createIsolatedFaceCanvas(sourceCanvas, maskCanvas){
    const sourceWidth = sourceCanvas.width;
    const sourceHeight = sourceCanvas.height;

    const maskCtx = maskCanvas.getContext('2d', { willReadFrequently:true });
    const maskData = maskCtx.getImageData(0, 0, sourceWidth, sourceHeight).data;

    let minX = sourceWidth;
    let minY = sourceHeight;
    let maxX = 0;
    let maxY = 0;

    // Cari batas terluar area wajah dari alpha mask
    for(let y = 0; y < sourceHeight; y++){
        for(let x = 0; x < sourceWidth; x++){
            const index = (y * sourceWidth + x) * 4;
            const alpha = maskData[index + 3];

            if(alpha > 20){
                if(x < minX) minX = x;
                if(y < minY) minY = y;
                if(x > maxX) maxX = x;
                if(y > maxY) maxY = y;
            }
        }
    }

    // Fallback jika mask gagal terbaca
    if(minX >= maxX || minY >= maxY){
        const output = document.createElement('canvas');
        output.width = sourceWidth;
        output.height = sourceHeight;

        const outCtx = output.getContext('2d');
        outCtx.drawImage(sourceCanvas, 0, 0);
        outCtx.globalCompositeOperation = 'destination-in';
        outCtx.drawImage(maskCanvas, 0, 0);
        outCtx.globalCompositeOperation = 'source-over';

        return output;
    }

    const faceWidth = maxX - minX;
    const faceHeight = maxY - minY;

    // Padding kecil agar wajah tidak terlalu mepet
    const padding = Math.round(Math.max(faceWidth, faceHeight) * 0.10);

    const cropX = Math.max(0, minX - padding);
    const cropY = Math.max(0, minY - padding);
    const cropRight = Math.min(sourceWidth, maxX + padding);
    const cropBottom = Math.min(sourceHeight, maxY + padding);

    const cropWidth = cropRight - cropX;
    const cropHeight = cropBottom - cropY;

    const output = document.createElement('canvas');
    output.width = cropWidth;
    output.height = cropHeight;

    const outCtx = output.getContext('2d');

    // Gambar bagian wajah saja
    outCtx.drawImage(
        sourceCanvas,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight
    );

    // Terapkan mask wajah yang juga sudah dipotong
    outCtx.globalCompositeOperation = 'destination-in';

    outCtx.drawImage(
        maskCanvas,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight
    );

    outCtx.globalCompositeOperation = 'source-over';

    return output;
}

function collectSkinSamples(ctx, maskCanvas, landmarks, width, height){
    const imageData = ctx.getImageData(0,0,width,height).data;
    const maskData = maskCanvas.getContext('2d', { willReadFrequently:true }).getImageData(0,0,width,height).data;

    let samples = [];

    if(landmarks){
        const faceWidth = distance(landmarks[234], landmarks[454]) * width;
        const radius = clamp(faceWidth * .065, 10, 34);
        const samplePointIds = [151, 200, 205, 425, 187, 411, 216, 436];

        samplePointIds.forEach(id => {
            const point = landmarks[id];
            if(point){
                samples = samples.concat(sampleCircle(imageData, maskData, width, height, point.x * width, point.y * height, radius));
            }
        });
    }

    if(samples.length < 450){
        samples = scanMaskedSkinPixels(imageData, maskData, width, height, 3);
    }

    if(samples.length < 150){
        samples = scanMaskedPixels(imageData, maskData, width, height, 5);
    }

    return samples;
}

function sampleCircle(imageData, maskData, width, height, cx, cy, radius){
    const samples = [];
    const minX = Math.max(0, Math.floor(cx - radius));
    const maxX = Math.min(width - 1, Math.ceil(cx + radius));
    const minY = Math.max(0, Math.floor(cy - radius));
    const maxY = Math.min(height - 1, Math.ceil(cy + radius));

    for(let y=minY; y<=maxY; y++){
        for(let x=minX; x<=maxX; x++){
            const dx = x - cx;
            const dy = y - cy;
            if(dx * dx + dy * dy > radius * radius) continue;

            const i = (y * width + x) * 4;
            if(maskData[i + 3] < 90) continue;

            const r = imageData[i];
            const g = imageData[i + 1];
            const b = imageData[i + 2];

            if(isSkinPixel(r,g,b)){
                samples.push([r,g,b]);
            }
        }
    }

    return samples;
}

function scanMaskedSkinPixels(imageData, maskData, width, height, step){
    const samples = [];

    for(let y=0; y<height; y+=step){
        for(let x=0; x<width; x+=step){
            const i = (y * width + x) * 4;
            if(maskData[i + 3] < 105) continue;

            const r = imageData[i];
            const g = imageData[i + 1];
            const b = imageData[i + 2];

            if(isSkinPixel(r,g,b)){
                samples.push([r,g,b]);
            }
        }
    }

    return samples;
}

function scanMaskedPixels(imageData, maskData, width, height, step){
    const samples = [];

    for(let y=0; y<height; y+=step){
        for(let x=0; x<width; x+=step){
            const i = (y * width + x) * 4;
            if(maskData[i + 3] < 120) continue;

            const r = imageData[i];
            const g = imageData[i + 1];
            const b = imageData[i + 2];
            const [h,s,v] = rgbToHsv(r,g,b);

            if(v > .18 && v < .96 && s > .05){
                samples.push([r,g,b]);
            }
        }
    }

    return samples;
}

function isSkinPixel(r,g,b){
    const max = Math.max(r,g,b);
    const min = Math.min(r,g,b);
    const [h,s,v] = rgbToHsv(r,g,b);
    const ycbcr = rgbToYcbcr(r,g,b);

    const likelySkinYCbCr = ycbcr.cr >= 128 && ycbcr.cr <= 190 && ycbcr.cb >= 70 && ycbcr.cb <= 152;
    const likelySkinHSV = ((h >= 0 && h <= 55) || h >= 330) && s >= .05 && s <= .82 && v >= .16;
    const hasColorInformation = max - min > 8;

    return likelySkinYCbCr && likelySkinHSV && hasColorInformation;
}

function buildAnalysisResult(ctx, maskCanvas, skinSamples, faceImage, usedFaceMesh, warning){
    const skinRgb = robustAverageColor(skinSamples);
    const lab = rgbToLab(skinRgb[0], skinRgb[1], skinRgb[2]);
    const hsv = rgbToHsv(skinRgb[0], skinRgb[1], skinRgb[2]);
    const tempIndex = calculateTemperatureIndex(skinRgb, lab, hsv);
    const undertone = classifyUndertone(tempIndex);
    const depth = classifyDepth(lab.L);
    const contrastInfo = calculateFaceContrast(ctx, maskCanvas, skinRgb);
    const chroma = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
    const season = classifySeason(undertone, depth, contrastInfo.level, chroma, lab, tempIndex);
    const sampleQuality = clamp(Math.round((Math.min(skinSamples.length, 6000) / 6000) * 100), 35, usedFaceMesh ? 98 : 82);
    const undertoneConfidence = calculateUndertoneConfidence(tempIndex);
    const confidence = Math.round((sampleQuality * .46) + (undertoneConfidence * .34) + ((usedFaceMesh ? 96 : 68) * .20));

    return {
        season,
        undertone,
        depth,
        contrast: contrastInfo.level,
        chroma,
        lab,
        hsv,
        tempIndex,
        skinRgb,
        faceImage,
        usedFaceMesh,
        warning,
        confidence,
        sampleQuality,
        undertoneConfidence,
        brightness: Math.round(lab.L),
        contrastValue: Math.round(contrastInfo.value),
        sampleCount: skinSamples.length
    };
}

function robustAverageColor(samples){
    if(!samples.length){
        return [190, 145, 120];
    }

    const sorted = [...samples].sort((a,b) => luminance(a[0],a[1],a[2]) - luminance(b[0],b[1],b[2]));
    const start = Math.floor(sorted.length * .12);
    const end = Math.ceil(sorted.length * .88);
    const trimmed = sorted.slice(start, end);

    const total = trimmed.reduce((acc, color) => {
        acc[0] += color[0];
        acc[1] += color[1];
        acc[2] += color[2];
        return acc;
    }, [0,0,0]);

    return total.map(v => Math.round(v / trimmed.length));
}

function calculateTemperatureIndex(rgb, lab, hsv){
    const [r,,b] = rgb;
    const yellowBlueBalance = lab.b - (lab.a * .72);
    const redBlueBalance = (r - b) * .055;
    const hueBoost = hsv[0] >= 24 && hsv[0] <= 48 ? 2.5 : 0;

    return yellowBlueBalance + redBlueBalance + hueBoost;
}

function classifyUndertone(tempIndex){
    if(tempIndex >= 8.5) return 'Warm';
    if(tempIndex <= 2.8) return 'Cool';
    return 'Neutral';
}

function calculateUndertoneConfidence(tempIndex){
    const warmDistance = Math.abs(tempIndex - 8.5);
    const coolDistance = Math.abs(tempIndex - 2.8);
    const distance = Math.min(warmDistance, coolDistance);

    if(tempIndex > 8.5 || tempIndex < 2.8){
        return clamp(Math.round(70 + distance * 5), 72, 98);
    }

    return clamp(Math.round(68 + Math.abs(tempIndex - 5.65) * 5), 62, 88);
}

function classifyDepth(lightness){
    if(lightness >= 70) return 'Light';
    if(lightness <= 46) return 'Deep';
    return 'Medium';
}

function calculateFaceContrast(ctx, maskCanvas, skinRgb){
    const width = maskCanvas.width;
    const height = maskCanvas.height;
    const imageData = ctx.getImageData(0,0,width,height).data;
    const maskData = maskCanvas.getContext('2d', { willReadFrequently:true }).getImageData(0,0,width,height).data;
    const values = [];

    for(let y=0; y<height; y+=3){
        for(let x=0; x<width; x+=3){
            const i = (y * width + x) * 4;
            if(maskData[i + 3] < 120) continue;

            const r = imageData[i];
            const g = imageData[i + 1];
            const b = imageData[i + 2];
            const l = rgbToLab(r,g,b).L;
            values.push(l);
        }
    }

    if(values.length < 20){
        return { value:25, level:'Medium' };
    }

    values.sort((a,b) => a - b);
    const skinL = rgbToLab(skinRgb[0], skinRgb[1], skinRgb[2]).L;
    const darkL = percentile(values, .12);
    const lightL = percentile(values, .88);
    const value = Math.max(Math.abs(skinL - darkL), Math.abs(lightL - skinL) * .65);

    if(value >= 34) return { value, level:'High' };
    if(value <= 19) return { value, level:'Low' };
    return { value, level:'Medium' };
}

function classifySeason(undertone, depth, contrast, chroma, lab, tempIndex){
    const isBright = chroma >= 31;
    const isMuted = chroma <= 23;

    if(undertone === 'Warm'){
        if(depth === 'Deep') return 'Deep Autumn';
        if(isBright && contrast === 'High') return 'Clear Spring';
        if(isBright && lab.L >= 58) return 'Warm Spring';
        if(isMuted || contrast === 'Low') return 'Soft Autumn';
        return 'Warm Autumn';
    }

    if(undertone === 'Cool'){
        if(depth === 'Deep' && contrast === 'High') return 'Deep Winter';
        if(isBright && contrast === 'High') return 'Clear Winter';
        if(depth === 'Light') return 'Light Summer';
        if(isMuted || contrast === 'Low') return 'Soft Summer';
        if(contrast === 'High') return 'Cool Winter';
        return 'Cool Summer';
    }

    if(depth === 'Light'){
        return tempIndex >= 5.6 ? 'Light Spring' : 'Light Summer';
    }

    if(depth === 'Deep'){
        return tempIndex >= 5.6 ? 'Deep Autumn' : 'Deep Winter';
    }

    if(isBright && contrast === 'High'){
        return tempIndex >= 5.6 ? 'Clear Spring' : 'Clear Winter';
    }

    if(isMuted || contrast === 'Low'){
        return tempIndex >= 5.6 ? 'Soft Autumn' : 'Soft Summer';
    }

    return tempIndex >= 5.6 ? 'Warm Autumn' : 'Cool Summer';
}

function showResults(analysis){
    document.getElementById('loadingSection').classList.add('hidden');
    document.getElementById('resultsSection').classList.remove('hidden');

    const result = seasonPalettes[analysis.season] || seasonPalettes['Warm Autumn'];

    document.getElementById('seasonResult').textContent = analysis.season;
    document.getElementById('undertoneResult').textContent = result.undertone || analysis.undertone;
    document.getElementById('depthResult').textContent = analysis.depth;
    document.getElementById('contrastResult').textContent = analysis.contrast;
    document.getElementById('resultImage').src = analysis.faceImage || currentImage;

    document.getElementById('harmonyScore').textContent = `${analysis.confidence}%`;
    document.getElementById('brightnessScore').textContent = `${analysis.brightness}%`;
    document.getElementById('undertoneScore').textContent = `${analysis.undertoneConfidence}%`;
    document.getElementById('colorMatch').textContent = `${analysis.sampleQuality}%`;

    const warningBox = document.getElementById('analysisWarning');
    if(analysis.warning){
        warningBox.textContent = analysis.warning;
        warningBox.classList.remove('hidden');
    }else{
        warningBox.classList.add('hidden');
    }

    generatePalette(result.palette);
    renderColorSwatches('makeupSwatches', result.makeup);
    renderColorSwatches('hijabSwatches', result.hijab);
    renderColorSwatches('outfitSwatches', result.outfit);
    renderAnalysisDetails(analysis);
}

function renderAnalysisDetails(analysis){
    const container = document.getElementById('analysisDetails');
    const rgb = analysis.skinRgb.join(', ');
    const detectionMode = analysis.usedFaceMesh ? 'MediaPipe face contour' : 'Fallback oval crop';

    container.innerHTML = `
        <div class="detail-row"><span>Detection mode</span><strong>${detectionMode}</strong></div>
        <div class="detail-row"><span>Clean skin samples</span><strong>${analysis.sampleCount.toLocaleString('id-ID')} pixels</strong></div>
        <div class="detail-row"><span>Average skin RGB</span><strong>${rgb}</strong></div>
        <div class="detail-row"><span>Temperature index</span><strong>${analysis.tempIndex.toFixed(2)}</strong></div>
        <div class="detail-row"><span>Chroma</span><strong>${analysis.chroma.toFixed(2)}</strong></div>
        <div class="detail-row"><span>Contrast value</span><strong>${analysis.contrastValue}</strong></div>
    `;
}


const COLOR_NAME_OVERRIDES = {
    '#000000':'Hitam Murni',
    '#FFFFFF':'Putih Murni',
    '#F8FAFC':'Putih Es',
    '#111827':'Hitam Arang',
    '#020617':'Hitam Pekat',
    '#0F172A':'Navy Gelap',
    '#1E3A8A':'Navy Klasik',
    '#1E40AF':'Biru Royal Gelap',
    '#2563EB':'Biru Royal',
    '#3A86FF':'Biru Kobalt',
    '#118AB2':'Biru Laut',
    '#8ECAE6':'Biru Langit Lembut',
    '#BDE0FE':'Biru Bubuk',
    '#A2D2FF':'Biru Pastel',
    '#E0F2FE':'Biru Es',
    '#87CEFA':'Biru Langit Terang',
    '#ADD8E6':'Biru Muda',
    '#00FFFF':'Cyan Neon',
    '#00CED1':'Turquoise Terang',
    '#06D6A0':'Mint Cerah',
    '#2A9D8F':'Teal Hangat',
    '#00695C':'Teal Gelap',
    '#064E3B':'Emerald Gelap',
    '#065F46':'Hijau Emerald',
    '#2E8B57':'Hijau Sea Green',
    '#2E7D32':'Hijau Forest',
    '#556B2F':'Olive Gelap',
    '#6B8E23':'Olive',
    '#6B705C':'Sage Gelap',
    '#ADC178':'Sage Hangat',
    '#A7F3D0':'Mint Lembut',
    '#B7E4C7':'Mint Pastel',
    '#9ADBC9':'Mint Segar',
    '#FFB703':'Kuning Madu',
    '#FFD166':'Kuning Lembut',
    '#FFD93D':'Kuning Cerah',
    '#FDE68A':'Kuning Pastel',
    '#E9C46A':'Emas Lembut',
    '#DAA520':'Goldenrod',
    '#B8860B':'Emas Tua',
    '#FBBF24':'Amber',
    '#F59E0B':'Amber Tua',
    '#CA8A04':'Mustard Tua',
    '#A16207':'Cokelat Mustard',
    '#FB8500':'Oranye Cerah',
    '#F77F00':'Oranye Labu',
    '#F97316':'Oranye Hangat',
    '#EA580C':'Oranye Terbakar',
    '#D97706':'Oranye Karamel',
    '#E85D04':'Jeruk Terbakar',
    '#FF7F50':'Coral',
    '#FF6B6B':'Coral Cerah',
    '#F4A261':'Peach Hangat',
    '#F7C8A5':'Peach Lembut',
    '#FFB085':'Aprikot',
    '#FFD1BA':'Peach Pucat',
    '#FFB997':'Peach Nude',
    '#F6C177':'Aprikot Emas',
    '#FFE5B4':'Cream Peach',
    '#FED7AA':'Cream Oranye',
    '#F5DEB3':'Beige Gandum',
    '#DDB892':'Tan Hangat',
    '#C2A878':'Taupe Emas',
    '#A98467':'Camel',
    '#B08968':'Cokelat Nude',
    '#CB997E':'Peach Tan',
    '#C68E6A':'Caramel Nude',
    '#D4A574':'Caramel',
    '#CD853F':'Peru Brown',
    '#D2691E':'Cinnamon',
    '#A0522D':'Sienna',
    '#8B4513':'Saddle Brown',
    '#8D5524':'Cokelat Hangat',
    '#5D4037':'Espresso',
    '#3E2723':'Cokelat Pekat',
    '#4A2C2A':'Cokelat Mahogany',
    '#7C2D12':'Cokelat Bata',
    '#78350F':'Cokelat Kopi',
    '#92400E':'Cokelat Karamel',
    '#B45309':'Cokelat Madu',
    '#431407':'Cokelat Sangat Gelap',
    '#854D0E':'Cokelat Mustard Gelap',
    '#E76F51':'Terracotta Cerah',
    '#E2725B':'Terracotta',
    '#B5651D':'Bronze',
    '#701C1B':'Maroon Cokelat',
    '#7F1D1D':'Wine Gelap',
    '#991B1B':'Merah Bata',
    '#BE123C':'Raspberry',
    '#C1121F':'Merah Ceri',
    '#EF233C':'Merah Jernih',
    '#DC2626':'Merah Kuat',
    '#B91C1C':'Merah Tua',
    '#C2410C':'Merah Oranye Gelap',
    '#800020':'Burgundy',
    '#881337':'Wine Berry',
    '#4C1D95':'Ungu Gelap',
    '#581C87':'Plum Gelap',
    '#6D28D9':'Ungu Violet',
    '#7C3AED':'Violet',
    '#8338EC':'Ungu Elektrik',
    '#3A0CA3':'Indigo',
    '#7B1FA2':'Ungu Plum',
    '#A78BFA':'Lavender Cerah',
    '#CDB4DB':'Lavender Lembut',
    '#D8B4E2':'Mauve Lembut',
    '#CBC0D3':'Mauve Abu',
    '#B8A1C9':'Dusty Lavender',
    '#818CF8':'Periwinkle',
    '#6A5ACD':'Slate Blue',
    '#FF006E':'Pink Neon',
    '#FF4D6D':'Watermelon Pink',
    '#EF476F':'Pink Cerah',
    '#EC4899':'Pink Magenta',
    '#DB2777':'Fuchsia Gelap',
    '#BE185D':'Magenta Tua',
    '#FF69B4':'Hot Pink',
    '#FF85C0':'Pink Ceria',
    '#F4A7B9':'Rose Peach',
    '#FFC8DD':'Pink Pastel',
    '#FFCAD4':'Pink Coral Muda',
    '#FBCFE8':'Pink Bubuk',
    '#F9C5D1':'Rose Lembut',
    '#FFB6C1':'Pink Muda',
    '#FFE4E1':'Misty Rose',
    '#E8AEB7':'Dusty Rose',
    '#D8A7B1':'Rose Mauve',
    '#C08497':'Rose Berry',
    '#B08998':'Muted Rose',
    '#A38F85':'Taupe Rose',
    '#B8C0FF':'Lavender Biru',
    '#A7B8D8':'Biru Dusty',
    '#8D99AE':'Biru Abu',
    '#94A3B8':'Slate Abu',
    '#CBD5E1':'Abu Biru Muda',
    '#E9ECEF':'Abu Terang',
    '#C0C0C0':'Silver',
    '#A8A29E':'Mushroom',
    '#B7B7A4':'Sage Abu',
    '#9CA3AF':'Abu Netral',
    '#8A817C':'Taupe Abu',
    '#78716C':'Abu Batu',
    '#6B7280':'Abu Gelap',
    '#64748B':'Slate',
    '#475569':'Slate Gelap',
    '#334155':'Slate Pekat',
    '#36454F':'Charcoal',
    '#57534E':'Cokelat Abu',
    '#4B5563':'Abu Arang',
    '#1F2937':'Charcoal Gelap',
    '#F0FFFF':'Azure Pucat',
    '#E6E6FA':'Lavender Pucat',
    '#D6CCC2':'Beige Dingin'
};

const NAMED_COLOR_REFERENCES = [
    { name:'Hitam', hex:'#000000' },
    { name:'Putih', hex:'#FFFFFF' },
    { name:'Navy', hex:'#0F172A' },
    { name:'Biru', hex:'#2563EB' },
    { name:'Biru Muda', hex:'#93C5FD' },
    { name:'Teal', hex:'#0F766E' },
    { name:'Hijau', hex:'#16A34A' },
    { name:'Olive', hex:'#6B8E23' },
    { name:'Sage', hex:'#A7B7A2' },
    { name:'Mint', hex:'#A7F3D0' },
    { name:'Kuning', hex:'#FDE047' },
    { name:'Emas', hex:'#D4AF37' },
    { name:'Mustard', hex:'#CA8A04' },
    { name:'Oranye', hex:'#F97316' },
    { name:'Peach', hex:'#F4A261' },
    { name:'Coral', hex:'#FF7F50' },
    { name:'Terracotta', hex:'#E2725B' },
    { name:'Cokelat', hex:'#8B4513' },
    { name:'Camel', hex:'#A98467' },
    { name:'Beige', hex:'#F5DEB3' },
    { name:'Merah', hex:'#DC2626' },
    { name:'Burgundy', hex:'#800020' },
    { name:'Pink', hex:'#FF85C0' },
    { name:'Rose', hex:'#D8A7B1' },
    { name:'Fuchsia', hex:'#DB2777' },
    { name:'Ungu', hex:'#7C3AED' },
    { name:'Lavender', hex:'#CDB4DB' },
    { name:'Mauve', hex:'#CBC0D3' },
    { name:'Abu-abu', hex:'#9CA3AF' },
    { name:'Charcoal', hex:'#36454F' }
];

function getColorName(color){
    const hex = normalizeHex(color);
    if(COLOR_NAME_OVERRIDES[hex]) return COLOR_NAME_OVERRIDES[hex];

    let nearest = NAMED_COLOR_REFERENCES[0];
    let nearestDistance = Infinity;
    const target = hexToRgbArray(hex);

    NAMED_COLOR_REFERENCES.forEach(reference => {
        const current = hexToRgbArray(reference.hex);
        const distance = colorDistance(target, current);
        if(distance < nearestDistance){
            nearestDistance = distance;
            nearest = reference;
        }
    });

    return nearest.name;
}

function normalizeHex(color){
    if(!color) return '#000000';
    const cleaned = color.trim().toUpperCase();
    if(/^#[0-9A-F]{6}$/.test(cleaned)) return cleaned;
    return '#000000';
}

function hexToRgbArray(hex){
    const normalized = normalizeHex(hex);
    const result = /^#?([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})$/i.exec(normalized);
    return result
        ? [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)]
        : [0,0,0];
}

function colorDistance(a, b){
    const redMean = (a[0] + b[0]) / 2;
    const r = a[0] - b[0];
    const g = a[1] - b[1];
    const blue = a[2] - b[2];

    return Math.sqrt(
        (2 + redMean / 256) * r * r +
        4 * g * g +
        (2 + (255 - redMean) / 256) * blue * blue
    );
}

function createColorNameMarkup(color){
    return `
        <div class="color-token-text">
            <div class="color-name">${getColorName(color)}</div>
            <div class="color-code">${normalizeHex(color)}</div>
        </div>
    `;
}

function generatePalette(colors){
    const container = document.getElementById('colorPalette');
    container.innerHTML = '';

    colors.forEach(color => {
        const item = document.createElement('div');
        item.className = 'palette-item';

        const swatch = document.createElement('div');
        swatch.className = 'palette-swatch color-glow';
        swatch.style.background = color;
        swatch.style.setProperty('--color-rgb', hexToRgb(color));
        swatch.title = `${getColorName(color)} ${normalizeHex(color)}`;

        const name = document.createElement('div');
        name.innerHTML = `
            <div class="palette-name">${getColorName(color)}</div>
            <div class="palette-code">${normalizeHex(color)}</div>
        `;

        item.appendChild(swatch);
        item.appendChild(name);
        container.appendChild(item);
    });
}

function renderColorSwatches(containerId, data){
    const container = document.getElementById(containerId);
    const textEl = document.getElementById(containerId.replace('Swatches','Rec'));

    container.innerHTML = '';

    const sections = [
        { title:'BEST COLOR', class:'best-label', colors:data.best },
        { title:'GOOD COLOR', class:'good-label', colors:data.good },
        { title:'AVOID COLOR', class:'avoid-label', colors:data.avoid }
    ];

    sections.forEach(section => {
        const group = document.createElement('div');
        group.className = 'color-group';

        const label = document.createElement('div');
        label.className = `color-label ${section.class}`;
        label.innerHTML = `
            <span>${section.title}</span>
            <span class="color-label-count">${section.colors.length} pilihan</span>
        `;
        group.appendChild(label);

        const row = document.createElement('div');
        row.className = containerId === 'outfitSwatches' ? 'shirt-grid' : 'swatch-row';

        section.colors.forEach(color => {
            const item = document.createElement('div');
            item.className = 'color-token';
            item.title = `${getColorName(color)} ${normalizeHex(color)}`;

            if(containerId === 'outfitSwatches'){
                const shirt = document.createElement('div');
                shirt.className = 'shirt-swatch';
                shirt.style.setProperty('--shirt-color', color);
                item.appendChild(shirt);
            }else{
                const swatch = document.createElement('div');
                swatch.className = 'color-swatch';
                swatch.style.background = `linear-gradient(135deg, ${color}, ${adjustBrightness(color,.9)})`;
                item.appendChild(swatch);
            }

            item.insertAdjacentHTML('beforeend', createColorNameMarkup(color));
            row.appendChild(item);
        });

        group.appendChild(row);
        container.appendChild(group);
    });

    textEl.textContent = data.text;
}

function rgbToYcbcr(r,g,b){
    return {
        y:16 + (.257 * r) + (.504 * g) + (.098 * b),
        cb:128 - (.148 * r) - (.291 * g) + (.439 * b),
        cr:128 + (.439 * r) - (.368 * g) - (.071 * b)
    };
}

function rgbToHsv(r,g,b){
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r,g,b);
    const min = Math.min(r,g,b);
    const d = max - min;
    let h = 0;

    if(d !== 0){
        if(max === r){
            h = 60 * (((g - b) / d) % 6);
        }else if(max === g){
            h = 60 * (((b - r) / d) + 2);
        }else{
            h = 60 * (((r - g) / d) + 4);
        }
    }

    if(h < 0) h += 360;
    const s = max === 0 ? 0 : d / max;
    const v = max;

    return [h,s,v];
}

function rgbToLab(r,g,b){
    let x;
    let y;
    let z;

    r /= 255;
    g /= 255;
    b /= 255;

    r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92;
    g = g > .04045 ? Math.pow((g + .055) / 1.055, 2.4) : g / 12.92;
    b = b > .04045 ? Math.pow((b + .055) / 1.055, 2.4) : b / 12.92;

    x = (r * .4124 + g * .3576 + b * .1805) / .95047;
    y = (r * .2126 + g * .7152 + b * .0722) / 1.00000;
    z = (r * .0193 + g * .1192 + b * .9505) / 1.08883;

    x = x > .008856 ? Math.cbrt(x) : (7.787 * x) + (16 / 116);
    y = y > .008856 ? Math.cbrt(y) : (7.787 * y) + (16 / 116);
    z = z > .008856 ? Math.cbrt(z) : (7.787 * z) + (16 / 116);

    return {
        L:(116 * y) - 16,
        a:500 * (x - y),
        b:200 * (y - z)
    };
}

function luminance(r,g,b){
    return .2126 * r + .7152 * g + .0722 * b;
}

function distance(a,b){
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function percentile(values, p){
    const index = Math.floor(clamp(p, 0, 1) * (values.length - 1));
    return values[index];
}

function clamp(value, min, max){
    return Math.min(max, Math.max(min, value));
}

function hexToRgb(hex){
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
        ? `${parseInt(result[1],16)},${parseInt(result[2],16)},${parseInt(result[3],16)}`
        : '0,0,0';
}

function adjustBrightness(hex, factor){
    const rgb = hexToRgb(hex).split(',').map(Number);
    const adjusted = rgb.map(c => Math.min(255, Math.max(0, Math.round(c * factor))));

    return `rgb(${adjusted[0]},${adjusted[1]},${adjusted[2]})`;
}