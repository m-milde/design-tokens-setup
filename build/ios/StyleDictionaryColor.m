
//
// StyleDictionaryColor.m
//

// Do not edit directly, this file was auto-generated.


#import ".h"

@implementation 

+ (UIColor *)color:()colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
#FF0000,
#00FF00,
#0000FF,
#0000FF,
#00FF00,
#FF0000,
#0000FF,
#FF0000
    ];
  });

  return colorArray;
}

@end