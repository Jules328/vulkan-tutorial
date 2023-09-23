#version 450

layout(binding = 1) uniform texture2D tex;
layout(binding = 2) uniform sampler samp;

layout(location = 0) in vec4 fragColor;
layout(location = 1) in vec2 fragTexCoord;

layout(location = 0) out vec4 outColor;

void main() {
    float alpha = fragColor.a;
    outColor = vec4(alpha * fragColor.rgb + (1 - alpha) * texture(sampler2D(tex, samp), fragTexCoord).rgb, 1.0);
}
