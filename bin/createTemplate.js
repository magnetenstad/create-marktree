#!/usr/bin/env node

import { Directory } from 'virtual-file-system'

const template = Directory.read('template', ['node_modules'])
console.log(template)
template.name = 'test'
template.write()
