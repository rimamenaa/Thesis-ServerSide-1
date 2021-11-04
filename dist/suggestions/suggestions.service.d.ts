import { Model } from 'mongoose';
import { CreateSuggestionsDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionsDto } from './dto/update-suggestion.dto';
import { Suggestions, SuggestionsDocument } from './entities/suggestion.entity';
export declare class SuggestionsService {
    private readonly model;
    constructor(model: Model<SuggestionsDocument>);
    findAll(): Promise<Suggestions[]>;
    findOne(id: string): Promise<Suggestions>;
    create(createSuggestionsDto: CreateSuggestionsDto): Promise<Suggestions>;
    update(id: string, updateSuggestionsDto: UpdateSuggestionsDto): Promise<Suggestions>;
    delete(id: string): Promise<Suggestions>;
}
