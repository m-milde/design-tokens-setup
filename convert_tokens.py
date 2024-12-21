import re

def parse_objc_tokens(file_path):
    """Parse Objective-C tokens from a file."""
    tokens = []
    pattern = r"#define (\w+) ([\d.]+)f"
    with open(file_path, "r") as file:
        content = file.read()
        matches = re.findall(pattern, content)
        for name, value in matches:
            tokens.append((name, float(value)))
    return tokens

def generate_swiftui_tokens(tokens, output_file):
    """Generate SwiftUI tokens with interconnections."""
    swift_code = """//
// Tokens.swift
//
// Auto-generated file. Do not edit directly.
//
import SwiftUI

struct Tokens {
    struct Space {
"""
    # Generate SwiftUI variables
    for i, (name, value) in enumerate(tokens):
        swift_var_name = name.lower().replace("_", "")
        if i == 0:
            # Root token
            swift_code += f"        static let {swift_var_name}: CGFloat = {value}\n"
        else:
            # Interconnected tokens
            prev_var_name = tokens[i - 1][0].lower().replace("_", "")
            swift_code += f"        static var {swift_var_name}: CGFloat {{ {prev_var_name} }}\n"

    swift_code += """    }
}
"""

    # Write to output file
    with open(output_file, "w") as file:
        file.write(swift_code)

def main():
    input_file = "tokens.h"  # Input Objective-C file
    output_file = "Tokens.swift"  # Output SwiftUI file

    # Parse tokens
    tokens = parse_objc_tokens(input_file)
    
    # Generate SwiftUI tokens
    generate_swiftui_tokens(tokens, output_file)
    print(f"SwiftUI tokens have been written to {output_file}")

if __name__ == "__main__":
    main()
