# PowerShell script to remove glassmorphism
 = @(
    'src\components\Projects.tsx',
    'src\components\About.tsx',
    'src\components\Skills.tsx',
    'src\components\Experience.tsx',
    'src\components\Contact.tsx'
)

foreach ( in ) {
    Write-Host "Processing ..."
     = Get-Content  -Raw
    
    # Replace glassmorphism classes with cosmic-card
     =  -replace 'bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl', 'cosmic-card'
     =  -replace 'bg-white/5 backdrop-blur-lg border border-white/10', 'cosmic-card'
     =  -replace 'bg-white/5 backdrop-blur-md border border-white/20', 'cosmic-card'
    
    # Save back
    Set-Content -Path  -Value  -NoNewline
    Write-Host "Completed "
}

Write-Host "Glassmorphism removal complete!"
