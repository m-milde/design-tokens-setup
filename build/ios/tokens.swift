//
// Tokens.swift
//
// Do not edit directly; this file was auto-generated.
//

import SwiftUI

struct Tokens {
    struct Space {
        // Root token
        static let rootSpacer: CGFloat = 160.0
        
        // Semantic token inherits from root
        static var semanticGap: CGFloat {
            rootSpacer
        }
        
        // Component token inherits from semantic
        static var componentButtonGap: CGFloat {
            semanticGap
        }
    }
}
