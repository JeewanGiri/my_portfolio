# Remove Glassmorphism Script
# This script removes glassmorphism styling from all component files

Write-Host "Removing glassmorphism from portfolio components..." -ForegroundColor Cyan

# Define file paths
$componentsPath = "src\components"
$files = @(
    "$componentsPath\Projects.tsx",
    "$componentsPath\About.tsx",
    "$componentsPath\Skills.tsx",
    "$componentsPath\Experience.tsx",
    "$componentsPath\Contact.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processing: $file" -ForegroundColor Yellow
        
        $content = Get-Content $file -Raw
        
        # Replace glassmorphism patterns
        $content = $content -replace 'relative rounded-\[28px\] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl', 'cosmic-card'
        $content = $content -replace 'relative rounded-\[24px\] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl', 'cosmic-card'
        $content = $content -replace 'relative rounded-\[20px\] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl', 'cosmic-card'
        $content = $content -replace 'relative rounded-\[16px\] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl', 'cosmic-card'
        $content = $content -replace 'relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10', 'cosmic-card'
        $content = $content -replace 'rounded-xl bg-white/5 backdrop-blur-md border border-white/20', 'rounded-lg bg-space-darker border border-nebula-purple/30'
        
        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "✓ Completed: $file" -ForegroundColor Green
    } else {
        Write-Host "✗ File not found: $file" -ForegroundColor Red
    }
}

Write-Host "`nGlassmorphism removal complete!" -ForegroundColor Green
Write-Host "Please review the changes and restart your dev server if needed." -ForegroundColor Cyan
