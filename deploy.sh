#!/bin/sh

# Upload images
scp ./agricola.tar.gz agricola:~

# Restart images on EC2 instances
ssh agricola './update-agricola.sh'

# Cleanup
ssh agricola 'docker system prune -f'