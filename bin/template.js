#!/usr/bin/env node

import { Directory } from 'virtual-file-system'

const path = process.argv[1].replace('bin\\template.js', 'template')
const directory = Directory.read(path, ['node_modules', 'docs'])
directory.writeContents('')
