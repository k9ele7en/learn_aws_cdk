#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LearnAwsCdkStack } from '../lib/learn_aws_cdk-stack';

const app = new cdk.App();
new LearnAwsCdkStack(app, 'LearnAwsCdkStack');
